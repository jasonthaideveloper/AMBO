class LoaiSanPhamController {
    // [GET] /thuoc-tinh-chung
    getLoaiSanPham(req, res) {
        res.render('loai-san-pham');
    }
}

module.exports = new LoaiSanPhamController();
