# Team room của workshop-cart

## Số tiền và API
- Tất cả các giá trị tiền tệ đều được xử lý dưới dạng số nguyên với đơn vị cent. Các trường (field) trả về giá trị tiền trong API phải luôn kết thúc bằng Cents
- Nếu thay đổi nội dung phản hồi của API danh sách order, thì sẽ phản ánh cùng 1 thay đổi vào `docs/openapi.yaml`. Không chỉ thay đổi schema , mà thay đổi cả danh sách các mục bắt buộc.
- Không thay đổi ý nghĩa hay tên truòng của response sẵn có
- Trong log hay giá trị phản hồi của API thì không bao gồm mail adress khách hàng, tên, địa chỉ.

## Implement
- Chỉ sử dụng endpoint có gắn tên. Không sử dụng default export.
- Phần xử lý tạo giá trị phản hồi của API thì triển khai dưới dạng hàm thuần túy có trong `src/`

## Test và Xác nhận
-Nếu thay đổi dữ liệu phản hồi của API, hãy test bằng Vitest để xác nhận các trường: hợp order có phí vận chuyển thông thường(通常の配送料), order có phí vận chuyển bằng 0, và dữ liệu không bao gồm thông tin khách hàng.
-Trước khi hoàn thành công việc, hãy chạy npm test và npm run build, đồng thời xác nhận rằng cả hai đều thực thi thành công. 