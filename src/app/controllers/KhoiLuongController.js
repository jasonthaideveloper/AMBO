const Mass = require('../models/KhoiLuongModel');
const { multipleMongooseToObject, mongooseToOject } = require('../../util/mongoose');


class KhoiLuongController {
    // [GET] /thuoc-tinh-chung
    getKhoiLuong(req, res, next) {
        Promise.all([Mass.find({}), Mass.countDocumentsDeleted()])
            .then(([masses, deletedCount]) =>
                res.render('khoi-luong', {
                    masses: multipleMongooseToObject(masses),
                    deletedCount
                })
            )
            .catch(next);
    }

    postKhoiLuong(req, res, next) {
        const mass = new Mass(req.body);
        mass.save()
            .then(() => res.redirect('/khoi-luong'))
            .catch(error => {

            })
    }

    updateKhoiLuong(req, res, next) {
        Mass.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/khoi-luong'))
            .catch(next);
    }



    deleteKhoiLuong(req, res, next) {
        Mass.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    destroyKhoiLuong(req, res, next) {
        Mass.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
        }

    storedKhoiLuong(req, res, next) {
        Mass.findDeleted({})
            .then((masses) =>
                res.render('stores/luu-tru-khoi-luong', {
                    masses: multipleMongooseToObject(masses)
                })
            )
            .catch(next);
    }

    restoreKhoiLuong(req, res, next) {
        Mass.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new KhoiLuongController();
