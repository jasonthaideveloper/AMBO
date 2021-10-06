const Payments = require('../models/HinhThucThanhToanModel');
const { multipleMongooseToObject, mongooseToOject } = require('../../util/mongoose');


class HinhThucThanhToanController {
    // [GET] /thuoc-tinh-chung
    getHinhThucThanhToan(req, res, next) {
        Promise.all([Payments.find({}), Payments.countDocumentsDeleted()])
            .then(([payments, deletedCount]) =>
                res.render('hinh-thuc-thanh-toan', {
                    payments: multipleMongooseToObject(payments),
                    deletedCount
                })
            )
            .catch(next);
    }

    postHinhThucThanhToan(req, res, next) {
        const payments = new Payments(req.body);
        payments.save()
            .then(() => res.redirect('/hinh-thuc-thanh-toan'))
            .catch(error => {

            })
    }

    updateHinhThucThanhToan(req, res, next) {
        Payments.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/hinh-thuc-thanh-toan'))
            .catch(next);
    }



    deleteHinhThucThanhToan(req, res, next) {
        Payments.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    destroyHinhThucThanhToan(req, res, next) {
        Payments.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
        }

    storedHinhThucThanhToan(req, res, next) {
        Payments.findDeleted({})
            .then((payments) =>
                res.render('stores/luu-tru-thanh-toan', {
                    payments: multipleMongooseToObject(payments)
                })
            )
            .catch(next);
    }

    restoreHinhThucThanhToan(req, res, next) {
        Payments.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new HinhThucThanhToanController();

