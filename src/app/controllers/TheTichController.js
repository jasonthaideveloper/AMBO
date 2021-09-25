class TheTichController {
    // [GET] /thuoc-tinh-chung
    getTheTich(req, res) {
        res.render('the-tich');
    }
}

module.exports = new TheTichController();
