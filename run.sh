#!/bin/bash
# RabitSpa Self-host — RELEASE (bản đóng gói, layout phẳng, tự chứa).
# Sinh bởi selfhost/build.sh — KHÔNG cần Node/pnpm/Postgres cài sẵn trên máy
# này (dùng node/bin/node đóng gói kèm nếu có; nếu không, fallback `node` PATH).
set -uo pipefail
SELF_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SELF_DIR" || exit 1

# Cổng giao diện và địa chỉ nghe đổi được qua biến môi trường. Mặc định hợp
# cho máy tại cửa hàng: nghe trên mọi giao diện để máy khác trong cùng mạng nội
# bộ (điện thoại lễ tân, máy quầy thứ hai) vào được bằng địa chỉ IP máy này.
# Khi chạy trên máy chủ có tầng ngoài lo việc tiếp nhận, đặt lại 127.0.0.1 để
# không mở thẳng cổng ra Internet.
WEB_PORT="${RABITSPA_WEB_PORT:-8895}"
BIND_HOST="${RABITSPA_BIND_HOST:-0.0.0.0}"

# Cổng backend thì KHÔNG đổi được, và cố ý không nhận biến môi trường.
# Giao diện chuyển tiếp lời gọi API tới cổng này bằng một quy tắc được ghi cứng
# vào bản build, nên đổi ở đây là giao diện gọi vào chỗ trống: trang vẫn mở
# nhưng đăng nhập trả lỗi máy chủ. Thà cố định còn hơn để một biến trông như
# dùng được mà thực ra làm hỏng ứng dụng.
BACKEND_PORT=4010

# ─── Bộ chạy Node ───────────────────────────────────────────────────────────
# Thứ tự: bản nằm sẵn trong thư mục này > bản cài trên máy > tự tải về.
#
# Tự tải là để bản phát hành không phải mang theo tệp 127 MB — kho chứa mã bị
# chặn ở 100 MB mỗi tệp, và người tải về cũng đỡ phải chờ chừng đó dù máy họ có
# thể đã có sẵn. Chỉ tải đúng một lần, lần sau dùng lại.
NODE_VERSION_FALLBACK="${RABITSPA_NODE_VERSION:-22.20.0}"

tai_node() {
  local os arch url tmp
  case "$(uname -s)" in
    Darwin) os="darwin" ;;
    Linux)  os="linux" ;;
    *) return 1 ;;
  esac
  case "$(uname -m)" in
    arm64|aarch64) arch="arm64" ;;
    x86_64|amd64)  arch="x64" ;;
    *) return 1 ;;
  esac

  url="https://nodejs.org/dist/v${NODE_VERSION_FALLBACK}/node-v${NODE_VERSION_FALLBACK}-${os}-${arch}.tar.gz"
  echo "[node] Lần đầu chạy: đang tải bộ chạy Node (khoảng 40 MB, chỉ một lần)..."
  tmp="$(mktemp -d)"
  if curl -fsSL "$url" -o "$tmp/node.tar.gz" 2>/dev/null &&
     tar xzf "$tmp/node.tar.gz" -C "$tmp" 2>/dev/null; then
    mkdir -p "$SELF_DIR/node"
    cp -R "$tmp/node-v${NODE_VERSION_FALLBACK}-${os}-${arch}/"* "$SELF_DIR/node/" 2>/dev/null
    rm -rf "$tmp"
    [ -x "$SELF_DIR/node/bin/node" ] && return 0
  fi
  rm -rf "$tmp"
  return 1
}

NODE_BIN=""
if [ -x "$SELF_DIR/node/bin/node" ] && "$SELF_DIR/node/bin/node" -v >/dev/null 2>&1; then
  NODE_BIN="$SELF_DIR/node/bin/node"
elif command -v node >/dev/null 2>&1; then
  NODE_BIN="$(command -v node)"
elif tai_node; then
  NODE_BIN="$SELF_DIR/node/bin/node"
  echo "[node] Xong."
else
  echo "[LOI] Máy chưa có Node.js và không tải được về."
  echo ""
  echo "      Cách xử lý: kiểm tra kết nối mạng rồi chạy lại,"
  echo "      hoặc tự cài Node.js bản LTS tại https://nodejs.org rồi chạy lại."
  exit 1
fi

# ─── Machine code — md5(MAC) 6 ký tự đầu, sinh 1 lần rồi cố định vĩnh viễn ───
CODE_FILE="$SELF_DIR/.machine-code"
if [ ! -f "$CODE_FILE" ]; then
  MAC="$(ifconfig 2>/dev/null | grep -o 'ether [0-9a-f:]*' | head -1 | awk '{print $2}')"
  if [ -n "$MAC" ]; then
    MACHINE_CODE="$(echo -n "$MAC" | md5 2>/dev/null | head -c 6)"
    [ -z "$MACHINE_CODE" ] && MACHINE_CODE="$(echo -n "$MAC" | md5sum 2>/dev/null | head -c 6)"
  else
    MACHINE_CODE="$(cat /dev/urandom | LC_ALL=C tr -dc 'a-z0-9' | head -c 6)"
  fi
  echo "$MACHINE_CODE" > "$CODE_FILE"
else
  MACHINE_CODE="$(tr -d '[:space:]' < "$CODE_FILE")"
fi

# ─── Ghép máy với tài khoản trên rabitspa.com ────────────────────────────────
# Máy này KHÔNG mở cổng nào ra Internet. Muốn truy cập được từ bên ngoài, chủ
# cửa hàng đăng nhập trên rabitspa.com, bật link public rồi tạo một mã ghép;
# gõ mã đó vào đây MỘT LẦN là xong, từ đó mỗi lần chạy máy tự kết nối.
#
#   bash run.sh --ghep-may   ghép máy này với cửa hàng (chỉ làm một lần)
#   bash run.sh --go-ghep    quên thông tin đã ghép trên máy này
#
# Thông tin ghép nằm ở .pairing.json (chỉ chủ máy đọc được). Trong đó có thẻ
# máy và token kết nối — ĐỪNG chia sẻ file này cho ai.
CLOUD_API="${RABITSPA_CLOUD_API:-https://rabitspa.com/api/v1}"
PAIR_FILE="$SELF_DIR/.pairing.json"

PAIR_JS="$SELF_DIR/cloudflared/pairing.js"

pair_get() { "$NODE_BIN" "$PAIR_JS" get "$PAIR_FILE" "$1" 2>/dev/null; }

ghep_may() {
  if [ ! -f "$PAIR_JS" ]; then
    echo "[LOI] Thiếu $PAIR_JS — bản cài không đầy đủ, hãy tải lại."
    return 1
  fi
  echo "===================================="
  echo "  Ghép máy này với cửa hàng của bạn"
  echo "===================================="
  echo "Làm theo 3 bước:"
  echo "  1. Mở https://rabitspa.com/login và đăng nhập"
  echo "     (chưa có tài khoản thì đăng ký — dùng Google cũng được)."
  echo "  2. Vào mục Link public, bấm Bật link, rồi bấm Tạo mã ghép máy."
  echo "  3. Gõ mã vừa hiện ra vào đây."
  echo ""
  printf "Mã ghép máy: "
  read -r PAIR_CODE
  "$NODE_BIN" "$PAIR_JS" pair "$CLOUD_API" "$PAIR_FILE" "$PAIR_CODE" \
    "$MACHINE_CODE" "$(uname -s) $(uname -r)" "$WEB_PORT" || return 1
  chmod 600 "$PAIR_FILE" 2>/dev/null
  echo ""
  echo "     Giờ chạy: bash run.sh"
}

case "${1:-}" in
  --ghep-may|--pair)
    ghep_may; exit $?
    ;;
  --go-ghep|--unpair)
    rm -f "$PAIR_FILE"
    echo "[OK] Đã xoá thông tin ghép máy trên máy này (chỉ ở đây, tài khoản không đổi)."
    echo "     Muốn dùng lại link public: bash run.sh --ghep-may"
    exit 0
    ;;
  -h|--help)
    echo "Cách dùng:"
    echo "  bash run.sh              chạy ứng dụng"
    echo "  bash run.sh --ghep-may   ghép máy với cửa hàng để có link public"
    echo "  bash run.sh --go-ghep    quên thông tin đã ghép trên máy này"
    exit 0
    ;;
esac

# ─── Secrets JWT bền vững (sinh 1 lần, lưu lại — restart không mất phiên) ────
SECRETS_FILE="$SELF_DIR/.secrets.env"
if [ ! -f "$SECRETS_FILE" ]; then
  gen_secret() { LC_ALL=C tr -dc 'A-Za-z0-9' < /dev/urandom | head -c 48; }
  {
    echo "SH_JWT_ACCESS_SECRET=$(gen_secret)"
    echo "SH_JWT_REFRESH_SECRET=$(gen_secret)"
    echo "SH_JWT_ADMIN_SECRET=$(gen_secret)"
  } > "$SECRETS_FILE"
fi
# shellcheck disable=SC1090
source "$SECRETS_FILE"

BACKEND_PID=""; WEB_PID=""; CF_PID=""; CF_CONFIG=""; CRED_TMP=""
cleanup() {
  echo ""; echo "Đang dừng..."
  [ -n "$CF_PID" ] && kill "$CF_PID" 2>/dev/null
  [ -n "$WEB_PID" ] && kill "$WEB_PID" 2>/dev/null
  [ -n "$BACKEND_PID" ] && kill "$BACKEND_PID" 2>/dev/null
  [ -n "$CF_CONFIG" ] && rm -f "$CF_CONFIG"
  # Credentials Cloudflare đã giải mã ra file tạm (nếu có) — xoá ngay lúc
  # thoát, KHÔNG giữ plaintext trên đĩa lâu dài (xem mục Cloudflare Tunnel).
  [ -n "$CRED_TMP" ] && rm -f "$CRED_TMP"
  echo "Đã dừng."
}
trap cleanup EXIT INT TERM

# ─── 1) Backend — DB đã đóng gói sẵn (rabitspa.db, có dữ liệu mẫu) ───────────
export DATABASE_PROVIDER=sqlite
export DATABASE_URL="file:$SELF_DIR/backend/rabitspa.db"
export PORT=$BACKEND_PORT
export BIND_HOST="$BIND_HOST"
export NODE_ENV=selfhost
export JWT_ACCESS_SECRET="$SH_JWT_ACCESS_SECRET"
export JWT_REFRESH_SECRET="$SH_JWT_REFRESH_SECRET"
export JWT_ADMIN_SECRET="$SH_JWT_ADMIN_SECRET"
export JWT_ACCESS_TTL="15m"
export JWT_REFRESH_TTL="30d"
export JWT_ADMIN_TTL="8h"
export ROOT_DOMAIN="rabitspa.selfhost.invalid"
export DEV_ROOT_DOMAIN="lvh.me"

# Cổng backend cố định, nên bận là phải dừng và nói rõ. Cứ chạy tiếp thì
# backend chết lặng lẽ, giao diện vẫn mở, và người dùng chỉ thấy "lỗi máy chủ"
# lúc đăng nhập mà không hiểu vì sao.
if command -v lsof >/dev/null 2>&1 && lsof -nP -iTCP:"$BACKEND_PORT" -sTCP:LISTEN >/dev/null 2>&1; then
  echo "[LOI] Cổng $BACKEND_PORT đang bị phần mềm khác chiếm."
  echo "      RabitSpa cần đúng cổng này cho phần lõi bên trong."
  echo "      Hãy đóng phần mềm đang chiếm nó (hoặc khởi động lại máy) rồi chạy lại."
  echo ""
  echo "      Đang chiếm cổng:"
  lsof -nP -iTCP:"$BACKEND_PORT" -sTCP:LISTEN 2>/dev/null | tail -n +2 | awk '{print "        " $1 " (tiến trình " $2 ")"}' | sort -u
  exit 1
fi

echo "[backend] Khởi động tại cổng nội bộ $BACKEND_PORT ..."
"$NODE_BIN" "$SELF_DIR/backend/dist/src/main.js" &
BACKEND_PID=$!

BACKEND_UP=0
for i in $(seq 1 30); do
  sleep 1
  if ! kill -0 "$BACKEND_PID" 2>/dev/null; then
    echo "[LOI] Backend thoát bất thường lúc khởi động."; exit 1
  fi
  if curl -fsS "http://127.0.0.1:$BACKEND_PORT/api/v1/tenants/resolve?subdomain=demo" -o /dev/null 2>/dev/null; then
    BACKEND_UP=1; break
  fi
done
[ "$BACKEND_UP" = "1" ] || { echo "[LOI] Backend không phản hồi sau 30s."; exit 1; }
echo "[backend] OK."

# ─── 2) Webclient — Next.js standalone server.js ─────────────────────────────
echo "[webclient] Khởi động tại cổng $WEB_PORT ..."
PORT=$WEB_PORT HOSTNAME="$BIND_HOST" "$NODE_BIN" "$SELF_DIR/webclient/server.js" &
WEB_PID=$!

WEB_UP=0
for i in $(seq 1 30); do
  sleep 1
  if ! kill -0 "$WEB_PID" 2>/dev/null; then
    echo "[LOI] webclient thoát bất thường lúc khởi động."; exit 1
  fi
  if curl -fsS "http://127.0.0.1:$WEB_PORT/login" -o /dev/null 2>/dev/null; then
    WEB_UP=1; break
  fi
done
[ "$WEB_UP" = "1" ] || { echo "[LOI] webclient không phản hồi sau 30s."; exit 1; }
echo "[webclient] OK."

# ─── 3) Link public (chỉ khi máy đã được ghép với cửa hàng) ─────────────────
# Ứng dụng vẫn chạy đầy đủ mà không cần phần này — link public chỉ thêm khả
# năng truy cập từ bên ngoài. Máy không mở cổng nào ra Internet: nó tự mở một
# kết nối ĐI RA tới Cloudflare, và Cloudflare đưa request vào đúng kết nối đó.
HAS_TUNNEL=0; TUNNEL_HOST=""; CONNECTED=0; CF_TOKEN=""

if [ -f "$PAIR_FILE" ] && [ -f "$PAIR_JS" ]; then
  # Báo về hệ thống trung tâm rồi đọc lại cấu hình. Hai tác dụng: chủ cửa hàng
  # nhìn thấy máy đang chạy, và nếu chủ vừa tắt rồi bật lại link (đường hầm
  # khác) thì token mới được cấp ngay đây — khỏi phải ghép lại máy.
  SYNC_OUT="$("$NODE_BIN" "$PAIR_JS" sync "$CLOUD_API" "$PAIR_FILE" "$(uname -s) $(uname -r)" 2>/dev/null)"
  case "$SYNC_OUT" in
    *OFFLINE=1*) echo "[link] Chưa liên lạc được với rabitspa.com — dùng cấu hình đã lưu." ;;
    *REVOKED=1*) echo "[link] [!] Máy này đã bị gỡ khỏi cửa hàng. Chạy: bash run.sh --ghep-may" ;;
  esac
  CF_TOKEN="$(printf '%s\n' "$SYNC_OUT" | sed -n 's/^CONNECTOR_TOKEN=//p')"
  TUNNEL_HOST="$(printf '%s\n' "$SYNC_OUT" | sed -n 's/^PUBLIC_HOST=//p')"
  [ -n "$CF_TOKEN" ] && HAS_TUNNEL=1
fi

if [ "$HAS_TUNNEL" = "1" ]; then
  CF_BIN="$SELF_DIR/cloudflared/cloudflared"
  [ -x "$CF_BIN" ] || CF_BIN="$(command -v cloudflared || true)"
  if [ -z "$CF_BIN" ] || [ ! -x "$CF_BIN" ]; then
    echo "[link] Đang tải công cụ kết nối (chỉ lần đầu)..."
    ARCH="$(uname -m)"; OS="$(uname -s)"
    if [ "$OS" = "Darwin" ]; then
      [ "$ARCH" = "arm64" ] \
        && CF_URL="https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-darwin-arm64.tgz" \
        || CF_URL="https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-darwin-amd64.tgz"
      TMPFILE="$(mktemp /tmp/cf_dl_XXXXXX.tgz)"
      if curl -fsSL "$CF_URL" -o "$TMPFILE" 2>/dev/null; then
        tar xzf "$TMPFILE" -C "$SELF_DIR/cloudflared/" 2>/dev/null
        CF_BIN="$SELF_DIR/cloudflared/cloudflared"; chmod +x "$CF_BIN" 2>/dev/null
      fi
      rm -f "$TMPFILE"
    else
      case "$ARCH" in
        aarch64|arm64) CF_ARCH="arm64" ;;
        *) CF_ARCH="amd64" ;;
      esac
      CF_URL="https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-$CF_ARCH"
      if curl -fsSL "$CF_URL" -o "$SELF_DIR/cloudflared/cloudflared" 2>/dev/null; then
        CF_BIN="$SELF_DIR/cloudflared/cloudflared"; chmod +x "$CF_BIN" 2>/dev/null
      fi
    fi
    if [ -z "$CF_BIN" ] || [ ! -x "$CF_BIN" ]; then
      echo "[link] [!] Không tải được công cụ kết nối — lần này chỉ chạy nội bộ."
      HAS_TUNNEL=0
    fi
  fi
fi

if [ "$HAS_TUNNEL" = "1" ]; then
  # Không cần file cấu hình: mọi quy tắc định tuyến nằm sẵn trên Cloudflare,
  # gắn với chính token này. Đổi tên miền hay đổi cổng đều không phải sửa gì ở
  # máy — lần chạy sau tự nhận.
  CF_LOG="$(mktemp /tmp/.cf_log_XXXXXX)"
  "$CF_BIN" tunnel --no-autoupdate run --token "$CF_TOKEN" > "$CF_LOG" 2>&1 &
  CF_PID=$!
  echo "[link] Đang kết nối..."
  for i in $(seq 1 20); do
    sleep 1
    if ! kill -0 "$CF_PID" 2>/dev/null; then
      echo "[link] [LOI] Kết nối thoát bất thường:"; tail -5 "$CF_LOG" 2>/dev/null
      break
    fi
    if grep -q "Registered tunnel connection" "$CF_LOG" 2>/dev/null; then CONNECTED=1; break; fi
  done
  rm -f "$CF_LOG"
  if [ "$CONNECTED" = "1" ]; then
    echo "[link] OK: https://$TUNNEL_HOST"
  else
    echo "[link] [!] Chưa kết nối được. Kiểm tra mạng, hoặc vào trang quản lý"
    echo "       tắt link rồi bật lại, sau đó chạy lại máy này."
  fi
elif [ -f "$PAIR_FILE" ]; then
  echo "[link] Máy đã ghép nhưng cửa hàng chưa bật link public — đang chạy nội bộ."
  echo "       Bật link tại https://rabitspa.com/login rồi chạy lại."
else
  echo "[link] Đang chạy nội bộ (chưa có địa chỉ truy cập từ ngoài)."
  echo "       Muốn mở link public: bash run.sh --ghep-may"
fi

echo "===================================="
echo "  RabitSpa — bản chạy trên máy bạn"
echo "===================================="
echo "  Mở trên trình duyệt : http://localhost:$WEB_PORT"
[ "$CONNECTED" = "1" ] && echo "  Địa chỉ công khai   : https://$TUNNEL_HOST"
echo ""
echo "  ĐĂNG NHẬP LẦN ĐẦU"
echo "    Tài khoản : admin"
echo "    Mật khẩu  : 123456"
echo "    Vào xong hãy ĐỔI MẬT KHẨU ngay (Cài đặt > Tài khoản)."
echo ""
echo "  CÓ THỂ LÀM GÌ TIẾP"
echo "    • Mở link public để dùng từ xa : bash run.sh --ghep-may"
echo "    • Gỡ máy khỏi cửa hàng         : bash run.sh --go-ghep"
echo "    • Xem toàn bộ hướng dẫn        : mở file HUONG-DAN.txt cạnh đây"
echo ""
echo "  Dữ liệu nằm trong thư mục này (backend/rabitspa.db) — sao lưu thư mục"
echo "  là sao lưu được tất cả. Tắt máy hoặc Ctrl+C là dừng."
echo "  Mã máy: $MACHINE_CODE"
echo "===================================="

wait
