/**
 * Đầu vào:
 *  + Nhập vào một số có hai chữ số
 * Xử lý:
 *  soHangDonVi = so % 10
 *  soHangChuc = so / 10
 *  tong = soHangDonVi + soHangChuc
 * Đầu ra:
 *  tong = ?
 */

//  Nhập vào số có hai chữ số
const so = 46;
var tong = 0;
// Lấy số hàng chục và số hàng đơn vị
var soHangDonVi = so % 10;
var soHangChuc = Math.floor(so / 10);
// Tính tổng
tong = soHangDonVi + soHangChuc;
// Xuất ra màn hình giá trị của tổng hai ký số của số vừa nhập
alert(`Tổng hai ký số của số ${so} là: ${tong}`);
