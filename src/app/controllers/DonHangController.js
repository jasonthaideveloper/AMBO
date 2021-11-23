const Bill = require('../models/DonHangModel');
const Supplier = require('../models/NhaCungCapModel');
const Customer = require('../models/KhachHangModel');
const Transportation = require('../models/HinhThucVanChuyenModel');
const Payments = require('../models/HinhThucThanhToanModel');
const Product = require('../models/SanPhamModel');
const { multipleMongooseToObject, mongooseToOject } = require('../../util/mongoose');

class DonHangController {
    // [GET] /thuoc-tinh-chung
    createDonHang(req, res, next) {
        Promise.all([Customer.find({}), Transportation.find(), Payments.find(), Product.find()])
            .then(([customers, transportations, payments, products]) => {
                return res.render('tao-don-hang', {
                    customers: multipleMongooseToObject(customers),
                    transportations: multipleMongooseToObject(transportations),
                    payments: multipleMongooseToObject(payments),
                    products: multipleMongooseToObject(products),
                });
            }
            )
            .catch(next);
    }

    getDonHang(req, res, next) {
        Promise.all([Bill.find({}), Bill.countDocumentsDeleted()])
            .then(([bills, deletedCount]) => {
                return res.render('don-hang', {
                    bills: multipleMongooseToObject(bills),
                    deletedCount
                });
            })
            .catch(next);
    }

    postDonHang(req, res, next) {
        console.log(req.body.productName);
        const request = {
            billId: req.body.billId,
            billName: req.body.billName,
            customerId: req.body.customerId,
            customerName: req.body.customerName,
            products: [{
                productName: req.body.productName,
                quantity: req.body.quantity,
                price: req.body.price,
                intoMoney: req.body.intoMoney
            }],
            placeOfDelivery: req.body.placeOfDelivery,
            total: req.body.total,
            payments: req.body.payments,
            transportation: req.body.transportation,
            description: req.description,
        }
        const bill = new Bill(request);
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
