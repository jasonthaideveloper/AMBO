class KichThuocController {
    // [GET] /thuoc-tinh-chung
    getKichThuoc(req, res) {
        res.render('kich-thuoc');
    }
}

module.exports = new KichThuocController();
