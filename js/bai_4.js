/**
 * Đầu vào:
 *  + Nhập vào chiều dài hình chữ nhật
 *  + Nhập vào chiều rộng hình chữ nhật
 * Xử lý:
 *  chuVi = (chieuDai + chieuRong) * 2
 *  dienTich = chieuDai * chieuRong
 * Đầu ra:
 *  chuVi = ?
 *  dienTich = ?
 */

// Nhập vào chiều dài và chiều rộng HCN
const chieuDai = 5;
const chieuRong = 3;
var chuVi = 0;
var dienTich = 0;
// Tính chu vi và diện tích
chuVi = (chieuDai + chieuRong) * 2;
dienTich = chieuDai * chieuRong;
// Xuất ra màn hình chu vi và diện tích
alert(`Chu vi HCN là: ${chuVi} - Diện tích HCN là: ${dienTich}`);
