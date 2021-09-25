class DonViTinhController {
    // [GET] /thuoc-tinh-chung
    getDonViTinh(req, res) {
        res.render('don-vi-tinh');
    }
}

module.exports = new DonViTinhController();
