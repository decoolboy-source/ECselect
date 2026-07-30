# Tra cứu dàn ngưng / cooling tower — Equipment Lookup PWA

Ứng dụng web tra cứu thông số kỹ thuật dàn ngưng bay hơi & tháp giải nhiệt
theo catalogue nhiều hãng (WXR, Heng An, OceanBlue, EVAPCO, Baltimore
Aircoil...). Chạy như một PWA — cài được trên điện thoại lẫn PC, hoạt
động offline sau khi đã mở lần đầu.

## 1. Cấu trúc thư mục

```
index.html      giao diện chính
app.js          logic ứng dụng (tính chọn model, nội suy, hiển thị)
data.js         TOÀN BỘ dữ liệu model — đây là file bạn sẽ sửa khi cập nhật
style.css       giao diện
manifest.json   khai báo PWA (tên app, icon, màu...)
sw.js           service worker — cache để chạy offline
icons/          icon app (192px, 512px, maskable)
```

Khi cần thêm hãng/model mới, chỉ file **data.js** thay đổi — các file còn
lại gần như không đổi trừ khi có tính năng mới.

## 2. Deploy lần đầu lên GitHub Pages

1. Tạo repository mới trên GitHub (Public), ví dụ `equipment-lookup`.
2. Vào tab **Add file → Upload files**, kéo thả toàn bộ nội dung đã giải
   nén của file zip vào (giữ nguyên cấu trúc thư mục ở trên, đừng bỏ vào
   một thư mục con) → **Commit changes**.
3. Vào **Settings → Pages**:
   - Source: **Deploy from a branch**
   - Branch: `main`, thư mục `/ (root)`
   - Bấm **Save**.
4. Đợi 1–2 phút, GitHub hiển thị đường link dạng:
   ```
   https://<username>.github.io/equipment-lookup/
   ```
   Đây là URL chính thức của app — lưu lại để dùng ở các bước sau.

## 3. Cài app trên điện thoại

1. Mở URL trên bằng **Chrome** (Android) hoặc **Safari** (iPhone).
2. Android (Chrome): menu ⋮ → **"Cài đặt ứng dụng"** / "Add to Home screen".
3. iPhone (Safari): nút Share (hình mũi tên đi lên) → **"Add to Home
   Screen"**.
4. App xuất hiện như icon riêng ngoài màn hình chính, mở full-screen,
   không có thanh địa chỉ trình duyệt, dùng offline được sau lần mở đầu.

## 4. Cài app trên PC

1. Mở URL trên bằng **Chrome** hoặc **Edge**.
2. Bấm icon cài đặt (hình màn hình có mũi tên) ở cuối thanh địa chỉ, hoặc
   menu ⋮ → **"Cài đặt Tra cứu dàn ngưng..."**.
3. App mở thành cửa sổ riêng như phần mềm desktop, có icon trong Start
   Menu / Dock, không cần mở trình duyệt mỗi lần dùng.

## 5. Cập nhật dữ liệu (khi có model/hãng mới)

Không cần cài Git hay dùng dòng lệnh:

1. Vào repo trên github.com → mở file **`data.js`**.
2. Bấm icon bút chì (✏️ Edit this file) ở góc phải.
3. Xoá hết nội dung cũ, dán nội dung `data.js` mới vào (file này tôi sẽ
   chuẩn bị sẵn mỗi lần bạn gửi thêm catalogue mới).
4. Cuộn xuống dưới → **Commit changes** (có thể ghi chú ngắn, ví dụ:
   "Thêm dòng model X").
5. Đợi khoảng 30–60 giây để GitHub Pages build lại.
6. Mở lại app trên điện thoại/PC (cần có mạng ở bước này) → dữ liệu mới
   hiện ra ngay, **không cần gỡ cài lại app, không cần xoá cache thủ
   công** — service worker của app đã được cấu hình ưu tiên lấy bản mới
   nhất từ mạng trước, chỉ dùng bản cache cũ khi không có mạng.

> Lưu ý: nếu chỉ sửa vài dòng nhỏ (một model, một thông số), bạn cũng có
> thể dùng chức năng tìm-và-sửa trực tiếp trên giao diện edit của GitHub
> thay vì dán lại toàn bộ file.

## 6. Kiểm tra nhanh sau khi cập nhật

- Mở app trên trình duyệt máy tính, kiểm tra dòng chữ nhỏ ở chân trang
  (build version) đã đổi số ngày mới chưa — nếu đổi tức là bản mới đã
  lên.
- Nếu vẫn thấy dữ liệu cũ: thử tải lại trang bằng Ctrl+Shift+R (Windows)
  / Cmd+Shift+R (Mac) để bỏ qua cache một lần.

## 7. Xử lý sự cố thường gặp

| Hiện tượng | Nguyên nhân thường gặp | Cách khắc phục |
|---|---|---|
| Trang trắng, không load được | Thiếu file trong repo (thường do upload thiếu thư mục `icons/`) | Kiểm tra lại đủ 7 mục ở phần 1 |
| Không thấy nút "Cài đặt" trên Chrome | Trang chưa chạy qua HTTPS, hoặc thiếu `manifest.json`/icon | Đảm bảo dùng đúng URL GitHub Pages (tự có HTTPS), không mở bằng `file://` |
| Sửa `data.js` xong mà app không đổi | Trình duyệt/điện thoại đang dùng bản cache cũ | Tải lại trang cứng (xem mục 6), hoặc đợi thêm — Pages build có độ trễ nhỏ |
| Lỗi cú pháp JavaScript sau khi dán `data.js` | Dán thiếu/dư dấu ngoặc khi copy | Luôn dùng nguyên văn file tôi gửi, không tự chỉnh sửa thủ công trong khung Edit của GitHub |
