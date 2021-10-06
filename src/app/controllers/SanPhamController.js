const Supplier = require('../models/NhaCungCapModel');
const Type = require('../models/LoaiSanPhamModel');
const Product = require('../models/SanPhamModel');
const Property = require('../models/ThuocTinhModel');
const Unit = require('../models/DonViTinhModel');
const { multipleMongooseToObject, mongooseToOject } = require('../../util/mongoose');

class SanPhamController {
    // [GET] /thuoc-tinh-chung
    getSanPham(req, res, next) {
        Promise.all([Product.find({}), Supplier.find({}), Type.find({}), Property.find({}), Unit.find({}), Product.countDocumentsDeleted()])
            .then(([products, suppliers, types, properties, units, deletedCount]) =>
                res.render('san-pham', {
                    products: multipleMongooseToObject(products),
                    suppliers: multipleMongooseToObject(suppliers),
                    types: multipleMongooseToObject(types),
                    properties: multipleMongooseToObject(properties),
                    units: multipleMongooseToObject(units),
                    deletedCount
                })
            )
            .catch(next);
    }

    postSanPham(req, res, next) {
        const product = new Product(req.body);
        product.save()
            .then(() => res.redirect('/san-pham'))
            .catch(error => {

            })
    }

    updateSanPham(req, res, next) {
        Product.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/san-pham'))
            .catch(next);
    }

    deleteSanPham(req, res, next) {
        Product.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    destroySanPham(req, res, next) {
        Product.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
        }

    storedSanPham(req, res, next) {
        Product.findDeleted({})
            .then((products) =>
                res.render('stores/luu-tru-san-pham', {
                    products: multipleMongooseToObject(products)
                })
            )
            .catch(next);
    }

    restoreSanPham(req, res, next) {
        Product.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

}

module.exports = new SanPhamController();
