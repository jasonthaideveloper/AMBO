class KhachHangController {
    // [GET] /thuoc-tinh-chung
    getKhachHang(req, res) {
        res.render('khach-hang');
    }
}

module.exports = new KhachHangController();
