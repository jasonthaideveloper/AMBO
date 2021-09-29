const Product = require('../models/SanPhamModel');

class SanPhamController {
    // [GET] /sanpham
    getSanPham(req, res) {
        // Product.find({}, function (err, products) {
        //     if(!err) {
        //         res.json(products);
        //     } else {
        //         res.status(500).jsonp({ err: 'message' })
        //     }
        // })
        
        res.render('san-pham');
    }
}

module.exports = new SanPhamController();
