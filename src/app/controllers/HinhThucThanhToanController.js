class HinhThucThanhToanController {
    // [GET] /thuoc-tinh-chung
    getHinhThucThanhToan(req, res) {
        res.render('hinh-thuc-thanh-toan');
    }
}

module.exports = new HinhThucThanhToanController();
