const Customer = require('../models/KhachHangModel');
const CityProvince = require('../models/TinhThanhPhoModel');
const District = require('../models/QuanHuyenModel');
const { multipleMongooseToObject, mongooseToOject } = require('../../util/mongoose');

class KhachHangController {
    // [GET] /thuoc-tinh-chung
    getKhachHang(req, res, next) {
        Promise.all([CityProvince.find({}), District.find({}), Customer.find({}), Customer.countDocumentsDeleted()])
            .then(([cities, districts, customers, deletedCount]) =>
                res.render('khach-hang', {
                    cities: multipleMongooseToObject(cities),
                    districts: multipleMongooseToObject(districts),
                    customers: multipleMongooseToObject(customers),
                    deletedCount
                })
            )
            .catch(next);
    }

    postKhachHang(req, res, next) {
        const customer = new Customer(req.body);
        customer.save()
            .then(() => res.redirect('/khach-hang'))
            .catch(error => {

            })
    }

    updateKhachHang(req, res, next) {
        Customer.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/khach-hang'))
            .catch(next);
    }

    deleteKhachHang(req, res, next) {
        Customer.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    destroyKhachHang(req, res, next) {
        Customer.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
        }

    storedKhachHang(req, res, next) {
        Customer.findDeleted({})
            .then((customers) =>
                res.render('stores/luu-tru-khach-hang', {
                    customers: multipleMongooseToObject(customers)
                })
            )
            .catch(next);
    }

    restoreKhachHang(req, res, next) {
        Customer.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new KhachHangController();
