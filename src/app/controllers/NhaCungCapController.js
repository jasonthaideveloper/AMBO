class NhaCungCapController {
    // [GET] /thuoc-tinh-chung
    getNhaCungCap(req, res) {
        res.render('nha-cung-cap');
    }
}

module.exports = new NhaCungCapController();
