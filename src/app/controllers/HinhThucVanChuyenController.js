class HinhThucVanChuyenController {
    // [GET] /thuoc-tinh-chung
    getHinhThucVanChuyen(req, res) {
        res.render('hinh-thuc-van-chuyen');
    }
}

module.exports = new HinhThucVanChuyenController();
