const Supplier = require('../models/NhaCungCapModel');
const CityProvince = require('../models/TinhThanhPhoModel');
const District = require('../models/TinhThanhPhoModel');
const { multipleMongooseToObject, mongooseToOject } = require('../../util/mongoose');

class NhaCungCapController {
    // [GET] /thuoc-tinh-chung
    getNhaCungCap(req, res, next) {
        Promise.all([CityProvince.find({}), Supplier.find({}), Supplier.countDocumentsDeleted()])
            .then(([cities, suppliers, deletedCount]) =>
                res.render('nha-cung-cap', {
                    cities: multipleMongooseToObject(cities),
                    suppliers: multipleMongooseToObject(suppliers),
                    deletedCount
                })
            )
            .catch(next);
    }

    postNhaCungCap(req, res, next) {
        const supplier = new Supplier(req.body);
        supplier.save()
            .then(() => res.redirect('/nha-cung-cap'))
            .catch(error => {

            })
    }

    updateNhaCungCap(req, res, next) {
        Supplier.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/nha-cung-cap'))
            .catch(next);
    }

    deleteNhaCungCap(req, res, next) {
        Supplier.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    destroyNhaCungCap(req, res, next) {
        Supplier.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
        }

    storedNhaCungCap(req, res, next) {
        Supplier.findDeleted({})
            .then((suppliers) =>
                res.render('stores/luu-tru-nha-cung-cap', {
                    suppliers: multipleMongooseToObject(suppliers)
                })
            )
            .catch(next);
    }

    restoreNhaCungCap(req, res, next) {
        Supplier.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new NhaCungCapController();
