class SanPhamController {
    // [GET] /sanpham
    getSanPham(req, res) {
        res.render('san-pham');
    }
}

module.exports = new SanPhamController();
