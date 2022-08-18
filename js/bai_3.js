/**
 * Đầu vào:
 *  + Nhập vào số tiền đô cần chuyển đổi sang tiền việt
 *  + giaDoLa = 23500
 * Xử lý:
 *  tienQuyDoi = soTien * giaDoLa
 * Đầu ra:
 *  tienQuyDoi = ?
 */

// Nhập vào số tiền và giá 1 đô la
const soTien = 2;
const giaDoLa = 23500;
var soTienQuyDoi = 0;
//  Chuyển đổi
soTienQuyDoi = soTien * giaDoLa;
// Thông báo ra màn hình
alert(
	`Với ${soTien}$ ta đổi sang tiền việt sẽ là ${soTienQuyDoi.toLocaleString(
		'it-IT',
		{ style: 'currency', currency: 'VND' },
	)}`,
);
