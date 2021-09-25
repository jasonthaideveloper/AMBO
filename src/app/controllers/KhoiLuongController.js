class KhoiLuongController {
    // [GET] /thuoc-tinh-chung
    getKhoiLuong(req, res) {
        res.render('khoi-luong');
    }
}

module.exports = new KhoiLuongController();
