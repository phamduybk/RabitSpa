#!/usr/bin/env node
/**
 * Ghép máy tại cửa hàng với tài khoản trên rabitspa.com.
 *
 * Bản tự cài chạy hoàn toàn ở máy khách hàng và không mở cổng nào ra Internet.
 * Muốn truy cập được từ bên ngoài, chủ cửa hàng đăng nhập trên web, bật link
 * public rồi tạo một mã ghép; gõ mã đó vào đây một lần là xong.
 *
 * Gom vào một file Node thay vì viết hai lần trong run.sh và run.bat: phần
 * việc ở đây toàn là đọc/ghi JSON và gọi HTTP — thứ mà shell script (nhất là
 * batch trên Windows) làm được nhưng rất dễ sai ở khâu thoát ký tự, và sai thì
 * biểu hiện là token hỏng chứ không phải lỗi rõ ràng.
 *
 * Cách dùng:
 *   node pairing.js pair <apiBase> <pairFile> <code> <fingerprint> <os> <port>
 *   node pairing.js sync <apiBase> <pairFile> <os>
 *   node pairing.js get  <pairFile> <field>
 *
 * `sync` in ra từng dòng KEY=VALUE để shell đọc lại, và cập nhật luôn file.
 */
'use strict';

const fs = require('fs');

const TIMEOUT_MS = 25_000;

function readPairing(file) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return {};
  }
}

/**
 * Ghi đè các trường mới vào file, BỎ QUA giá trị rỗng.
 *
 * Bỏ qua rỗng là điểm quan trọng: một lần báo tình trạng bình thường không kèm
 * token (vì hệ thống chỉ cấp lại khi thực sự cần), nếu ghi đè thẳng thì token
 * đang dùng sẽ bị xoá mất và máy mất kết nối cho tới lần ghép sau.
 */
function mergePairing(file, incoming) {
  const current = readPairing(file);
  for (const [key, value] of Object.entries(incoming || {})) {
    if (value !== null && value !== undefined && value !== '') current[key] = value;
  }
  fs.writeFileSync(file, JSON.stringify(current, null, 2), { mode: 0o600 });
  return current;
}

async function callApi(url, options) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    const text = await res.text();
    let body;
    try {
      body = JSON.parse(text);
    } catch {
      body = null;
    }
    return { ok: res.ok, status: res.status, body };
  } finally {
    clearTimeout(timer);
  }
}

/** Thông báo theo đúng thứ người dùng cần biết, thay vì mã lỗi kỹ thuật. */
function explainPairFailure(status, body) {
  if (status === 410) {
    return [
      'Mã ghép máy không dùng được.',
      'Mã chỉ sống 10 phút và chỉ dùng được một lần — nhiều khả năng nó đã hết hạn',
      'hoặc đã được dùng rồi. Hãy tạo mã mới trên trang quản lý rồi thử lại.',
    ];
  }
  if (status === 403) {
    return ['Cửa hàng đang tạm ngưng hoạt động. Liên hệ quản trị để được mở lại.'];
  }
  if (status === 429) {
    return ['Bạn thử quá nhiều lần trong thời gian ngắn. Đợi một phút rồi thử lại.'];
  }
  const detail = body?.message || body?.error;
  return [detail ? String(detail) : `Máy chủ trả về lỗi (mã ${status}).`];
}

async function cmdPair(apiBase, pairFile, code, fingerprint, os, port) {
  const cleaned = String(code || '').toUpperCase().replace(/[-\s]/g, '');
  if (!cleaned) {
    console.error('[LOI] Bạn chưa nhập mã ghép máy.');
    process.exit(1);
  }

  let res;
  try {
    res = await callApi(`${apiBase}/public-link/pair`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        code: cleaned,
        machineFingerprint: fingerprint || undefined,
        os: os || undefined,
        localPort: Number(port) || undefined,
      }),
    });
  } catch {
    console.error('[LOI] Không liên lạc được với rabitspa.com. Kiểm tra kết nối mạng rồi thử lại.');
    process.exit(1);
  }

  if (!res.ok) {
    console.error('[LOI] ' + explainPairFailure(res.status, res.body).join('\n      '));
    process.exit(1);
  }

  const saved = mergePairing(pairFile, res.body);
  console.log('[OK] Đã ghép máy xong.');
  if (saved.publicUrl) console.log('     Địa chỉ công khai: ' + saved.publicUrl);
  if (saved.customDomain) console.log('     Tên miền riêng   : https://' + saved.customDomain);
  if (!saved.connectorToken) {
    console.log('');
    console.log('     Lưu ý: cửa hàng chưa bật link public nên hiện vẫn chỉ chạy nội bộ.');
    console.log('     Bật link trên trang quản lý — máy sẽ tự nhận ở lần chạy sau.');
  }
}

/**
 * Báo về hệ thống trung tâm rồi in cấu hình hiện hành ra màn hình dưới dạng
 * KEY=VALUE. Không bao giờ thoát với mã lỗi: mất mạng thì vẫn phải chạy được
 * bằng thông tin đã lưu lần trước.
 */
async function cmdSync(apiBase, pairFile, os) {
  const current = readPairing(pairFile);
  if (!current.deviceToken) {
    console.log('PAIRED=0');
    return;
  }

  try {
    const res = await callApi(`${apiBase}/public-link/heartbeat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Device-Token': current.deviceToken,
      },
      body: JSON.stringify({ os: os || undefined, currentTunnelId: current.tunnelId || undefined }),
    });
    if (res.ok && res.body) {
      mergePairing(pairFile, res.body);
    } else if (res.status === 403) {
      // Chủ cửa hàng đã gỡ máy này trên trang quản lý. Token đường hầm thuộc
      // về cửa hàng nên kỹ thuật mà nói nó vẫn dùng được — nhưng gỡ máy nghĩa
      // là "đừng phục vụ từ máy đó nữa", nên xoá hẳn thông tin đã lưu để máy
      // tự dừng thay vì lặng lẽ chạy tiếp trái ý chủ.
      try {
        fs.unlinkSync(pairFile);
      } catch {
        /* file đã không còn thì thôi */
      }
      console.log('REVOKED=1');
      console.log('PAIRED=0');
      return;
    }
  } catch {
    console.log('OFFLINE=1');
  }

  const latest = readPairing(pairFile);
  console.log('PAIRED=1');
  console.log('CONNECTOR_TOKEN=' + (latest.connectorToken || ''));
  console.log('PUBLIC_HOST=' + (latest.customDomain || latest.hostname || ''));
  console.log('HAS_LINK=' + (latest.connectorToken ? '1' : '0'));
}

function cmdGet(pairFile, field) {
  const value = readPairing(pairFile)[field];
  if (value === undefined || value === null || value === '') process.exit(1);
  process.stdout.write(String(value));
}

async function main() {
  const [command, ...args] = process.argv.slice(2);
  switch (command) {
    case 'pair':
      await cmdPair(args[0], args[1], args[2], args[3], args[4], args[5]);
      break;
    case 'sync':
      await cmdSync(args[0], args[1], args[2]);
      break;
    case 'get':
      cmdGet(args[0], args[1]);
      break;
    default:
      console.error('Lệnh không hợp lệ. Dùng: pair | sync | get');
      process.exit(1);
  }
}

main().catch((err) => {
  console.error('[LOI] ' + (err?.message || err));
  process.exit(1);
});
