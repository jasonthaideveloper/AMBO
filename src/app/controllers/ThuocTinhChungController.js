class ThuocTinhChungController {
    // [GET] /thuoc-tinh-chung
    getThuocTinhChung(req, res) {
        res.render('thuoc-tinh-chung');
    }
}

module.exports = new ThuocTinhChungController();
