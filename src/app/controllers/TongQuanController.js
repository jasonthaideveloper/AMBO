class TongQuanController {
    // [GET] /thuoc-tinh-chung
    getTongQuan(req, res) {
        res.render('tong-quan');
    }
}

module.exports = new TongQuanController();
