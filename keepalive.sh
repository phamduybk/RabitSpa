#!/bin/bash
# selfhost/keepalive.sh — watchdog giữ RabitSpa self-host chạy liên tục.
# Chạy run.sh; nếu thoát (crash/mất mạng), tự khởi động lại sau vài giây.
# Dừng hẳn bằng Ctrl+C. (Tham khảo cơ chế pos_banhang/Script/keepalive_mac.sh)

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
RUN="$SCRIPT_DIR/run.sh"
DELAY=5          # giây chờ trước khi khởi động lại
MAX_FAST=5       # số lần crash liên tiếp (dưới MIN_UP giây) thì tạm dừng lâu hơn
MIN_UP=15        # nếu chạy chưa tới MIN_UP giây coi là "crash nhanh"
COOLDOWN=60      # nghỉ dài khi crash liên tục để tránh vòng lặp nóng ăn CPU

fast_count=0
STOP=0
trap 'STOP=1; echo ""; echo "[keepalive] Đã nhận dừng, thoát."; exit 0' INT TERM

echo "[keepalive] Giám sát RabitSpa self-host. Nhấn Ctrl+C để dừng hẳn."
while [ "$STOP" -eq 0 ]; do
  START=$(date +%s)
  echo "[keepalive] $(date '+%H:%M:%S') khởi động..."
  bash "$RUN"
  END=$(date +%s)
  UP=$(( END - START ))

  [ "$STOP" -eq 1 ] && break

  if [ "$UP" -lt "$MIN_UP" ]; then
    fast_count=$(( fast_count + 1 ))
    echo "[keepalive] Thoát sau ${UP}s (lần crash nhanh thứ $fast_count)."
    if [ "$fast_count" -ge "$MAX_FAST" ]; then
      echo "[keepalive] Crash liên tục — nghỉ ${COOLDOWN}s rồi thử lại."
      sleep "$COOLDOWN"
      fast_count=0
    else
      sleep "$DELAY"
    fi
  else
    fast_count=0
    echo "[keepalive] Thoát sau ${UP}s — khởi động lại sau ${DELAY}s."
    sleep "$DELAY"
  fi
done
