# RabitSpa — Phần mềm quản lý spa & salon chạy trên máy của bạn

RabitSpa miễn phí hoàn toàn, chạy trên chính máy tính của cửa hàng.
Dữ liệu nằm trên máy bạn, không cần mạng để dùng hằng ngày.

Dành cho **spa, thẩm mỹ viện, salon tóc, barbershop, tiệm nail, massage,
spa thú cưng, trang điểm, nha khoa, phòng khám, car spa.**

> **Muốn xem thử trước khi cài?** → https://demo.rabitspa.com
> Tài khoản `admin`, mật khẩu `123456`. Dữ liệu đặt lại mỗi đêm, cứ thoải mái nghịch.

---

## Tải về và chạy

1. Bấm nút xanh **Code → Download ZIP** ở đầu trang này.
   Hoặc vào mục **Releases** bên phải và tải bản mới nhất.
2. Giải nén ra một thư mục cố định, ví dụ `D:\RabitSpa` hoặc `~/RabitSpa`.
   Đừng để trong Downloads hay Desktop, tránh lỡ tay xoá.
3. Khởi động:
   - **Windows:** bấm đúp **`run.bat`**
   - **macOS / Linux:** mở Terminal tại thư mục đó, gõ `bash run.sh`
4. Giữ nguyên cửa sổ vừa hiện ra. Khi thấy dòng
   `Mở trên trình duyệt: http://localhost:8895`, mở địa chỉ đó.

Lần đầu chạy mất khoảng một phút: phần mềm tải bộ chạy Node (khoảng 30–40 MB)
rồi chuẩn bị dữ liệu. Những lần sau chỉ vài giây.

> Windows hiện cảnh báo "Windows protected your PC"? Bấm **More info → Run anyway**.
> macOS chặn? Bấm chuột phải vào `run.sh` → **Open**.

## Đăng nhập lần đầu

```
Tài khoản : admin
Mật khẩu  : 123456
```

**Đổi mật khẩu ngay sau khi vào** (Cài đặt → Tài khoản). Mật khẩu này giống nhau
ở mọi bản tải về, nên ai biết cũng vào được nếu bạn để nguyên.

## Dùng trên nhiều máy trong cửa hàng

Máy khác trong cùng mạng WiFi vào được bằng địa chỉ IP của máy đang chạy,
ví dụ `http://192.168.1.10:8895`.

Xem IP máy mình: Windows gõ `ipconfig` trong Command Prompt; macOS vào
Cài đặt hệ thống → Mạng; Linux gõ `ip addr`.

Máy đang chạy phần mềm phải bật thì các máy kia mới vào được.

## Truy cập từ ngoài cửa hàng

Muốn xem từ nhà, từ điện thoại 4G, hoặc gửi link đặt lịch cho khách — bạn cần
một địa chỉ công khai. Làm một lần duy nhất:

1. Mở https://rabitspa.com/login và đăng nhập (đăng ký được bằng Google).
2. Vào mục **Link public**, bấm **Bật link**, rồi bấm **Tạo mã ghép máy**.
3. Trên máy đang chạy phần mềm:
   - Windows: `run.bat --ghep-may`
   - macOS / Linux: `bash run.sh --ghep-may`

   Gõ mã vừa nhận vào là xong.

Từ lần sau phần mềm tự kết nối mỗi khi khởi động. Địa chỉ công khai chỉ hoạt
động khi máy này bật và có mạng — phần mềm chạy ở đây chứ không phải trên máy
chủ nào.

Muốn ngừng: `bash run.sh --go-ghep` (Windows: `run.bat --go-ghep`).

**Có tên miền riêng?** Đăng nhập rabitspa.com → mục Tên miền → nhập tên miền và
gửi yêu cầu, rồi trỏ bản ghi CNAME theo hướng dẫn hiện ra.

## Sao lưu

Toàn bộ dữ liệu nằm trong `backend/rabitspa.db`.

Chép cả thư mục cài đặt sang ổ cứng ngoài hoặc dịch vụ lưu trữ đám mây là đã
sao lưu xong. Nên làm mỗi tuần một lần — dữ liệu ở máy bạn, không ai giữ hộ.

Khôi phục: chép tệp đó về đúng chỗ cũ lúc phần mềm đang tắt.

## Có gì trong này

| Mục | Dùng để |
|---|---|
| Lịch hẹn | Đặt lịch, tránh trùng giờ và trùng kỹ thuật viên, nhắc khách |
| Thu ngân | Tính tiền, in hoá đơn, nhiều hình thức thanh toán |
| Khách hàng | Hồ sơ, lịch sử giao dịch, phân nhóm chăm sóc |
| Thẻ & liệu trình | Bán thẻ trả trước, trừ theo buổi, theo dõi hạn dùng |
| Kho hàng | Nhập xuất, tồn kho, định mức tiêu hao theo dịch vụ |
| Nhân viên | Hoa hồng, chấm công, lương, phân quyền |
| Báo cáo | Hơn hai mươi báo cáo, xuất Excel |
| Đa chi nhánh | Nhiều cơ sở trên cùng một hệ thống |
| Khảo sát | Hỏi ý kiến khách sau khi dùng dịch vụ |

**Hướng dẫn đầy đủ:** https://rabitspa.com/huong-dan

## Khi gặp trục trặc

**Không mở được `http://localhost:8895`**
Xem cửa sổ đang chạy có báo lỗi gì không, thử đóng hẳn rồi chạy lại. Nếu phần
mềm khác đang chiếm cổng, chạy với cổng khác:
`RABITSPA_WEB_PORT=9100 bash run.sh`

**Báo cổng 4010 đang bị chiếm**
Phần lõi bên trong cần đúng cổng này. Đóng phần mềm đang chiếm nó, hoặc khởi
động lại máy rồi chạy lại.

**Quên mật khẩu quản trị**
Xoá `backend/rabitspa.db` rồi chạy lại — phần mềm tạo lại dữ liệu mẫu,
**nhưng mất hết dữ liệu đã nhập**. Chỉ làm khi chấp nhận điều đó.

**Ghép máy báo mã không dùng được**
Mã chỉ sống 10 phút và dùng được một lần. Tạo mã mới rồi thử lại.

**Máy Ubuntu báo thiếu `libatomic.so.1`**
Chạy `sudo apt install libatomic1`.

## Câu hỏi hay gặp

**Có mất phí không?** Không. Miễn phí, đầy đủ tính năng, không giới hạn thời gian.

**Dữ liệu có bị gửi đi đâu không?** Không. Dữ liệu nằm trong thư mục cài đặt trên
máy bạn. Chỉ khi bạn tự bật địa chỉ công khai thì khách mới xem được qua
Internet — và lúc đó dữ liệu vẫn ở máy bạn, chỉ đi qua đường truyền.

**Tắt máy thì sao?** Phần mềm dừng, địa chỉ công khai tạm ngưng. Bật máy chạy lại
là mọi thứ như cũ, dữ liệu còn nguyên.

**Cần cài sẵn gì không?** Không. Lần chạy đầu phần mềm tự tải những gì nó cần.
Chỉ cần có mạng ở lần đầu đó.
