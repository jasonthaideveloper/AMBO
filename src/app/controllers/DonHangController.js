class DonHangController {
    // [GET] /thuoc-tinh-chung
    getDonHang(req, res) {
        res.render('don-hang');
    }
}

module.exports = new DonHangController();
