/**
 * Đầu vào:
 *  Nhập vào 5 số thực
 * Xử lý:
 *  tongSoThuc = numb1 + numb2 + numb3 + numb4 + numb5
 *  trungBinhCong = tongSoThuc / 5
 * Đầu ra:
 *  trungBinhCong = ?
 */

// Nhập vào 5 số thực
const numb1 = 4.56;
const numb2 = 7.46;
const numb3 = 124.5;
const numb4 = 1.575;
const numb5 = 23.468;
var tongSoThuc = 0;
var trungBinhCong = 0;
// Tổng số thực
tongSoThuc = numb1 + numb2 + numb3 + numb4 + numb5;
// Trung bình cộng
trungBinhCong = (tongSoThuc / 5).toFixed(4);
// Xuất kết quả ra màn hình
alert('Trung Bình Cộng 5 số thực là: ' + trungBinhCong);
