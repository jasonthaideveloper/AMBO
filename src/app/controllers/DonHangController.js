const Bill = require('../models/DonHangModel');
const Supplier = require('../models/NhaCungCapModel');
const Customer = require('../models/KhachHangModel');
const Transportation = require('../models/HinhThucVanChuyenModel');
const Payments = require('../models/HinhThucThanhToanModel');
const Product = require('../models/SanPhamModel');
const ProductInBill = require('../models/DonHangModel');
const { multipleMongooseToObject, mongooseToOject } = require('../../util/mongoose');

class DonHangController {
    // [GET] /thuoc-tinh-chung
    createDonHang(req, res, next) {
        Promise.all([Customer.find({}), Supplier.find({}), Bill.find({}), Transportation.find(), Payments.find(), Product.find(), Bill.countDocumentsDeleted()])
            .then(([customers, suppliers, bills, transportations, payments, products, deletedCount]) => {
                return res.render('tao-don-hang', {
                    customers: multipleMongooseToObject(customers),
                    suppliers: multipleMongooseToObject(suppliers),
                    bills: multipleMongooseToObject(bills),
                    transportations: multipleMongooseToObject(transportations),
                    payments: multipleMongooseToObject(payments),
                    products: multipleMongooseToObject(products),
                    deletedCount
                });
            }
            )
            .catch(next);
    }

    getDonHang(req, res, next) {
        // Promise.all([Customer.find({}), Supplier.find({}), Bill.find({}), Transportation.find(), Payments.find(), Product.find(), Bill.countDocumentsDeleted()])
        //     .then(([customers, suppliers, bills, transportations, payments, products, deletedCount]) => {
        //         return res.render('don-hang', {
        //             customers: multipleMongooseToObject(customers),
        //             suppliers: multipleMongooseToObject(suppliers),
        //             bills: multipleMongooseToObject(bills),
        //             transportations: multipleMongooseToObject(transportations),
        //             payments: multipleMongooseToObject(payments),
        //             products: multipleMongooseToObject(products),
        //             deletedCount
        //         });
        //     }
        //     )
        //     .catch(next);
        res.render('don-hang');
    }

    postDonHang(req, res, next) {
        console.log(req.body);
        const bill = new Bill(req.body);
        console.log(bill);
        bill.save()
            .then(() => res.redirect('/don-hang'))
            .catch(next)
    }

    updateDonHang(req, res, next) {
        Bill.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/don-hang'))
            .catch(next);
    }

    deleteDonHang(req, res, next) {
        Bill.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    destroyDonHang(req, res, next) {
        Bill.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    storedDonHang(req, res, next) {
        Bill.findDeleted({})
            .then((suppliers) =>
                res.render('stores/luu-tru-don-hang', {
                    suppliers: multipleMongooseToObject(suppliers)
                })
            )
            .catch(next);
    }

    restoreDonHang(req, res, next) {
        Bill.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new DonHangController();
