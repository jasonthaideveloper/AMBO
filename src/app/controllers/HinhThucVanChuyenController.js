const Transportation = require('../models/HinhThucVanChuyenModel');
const { multipleMongooseToObject, mongooseToOject } = require('../../util/mongoose');


class HinhThucVanChuyenController {
    // [GET] /thuoc-tinh-chung
    getHinhThucVanChuyen(req, res, next) {
        Promise.all([Transportation.find({}), Transportation.countDocumentsDeleted()])
            .then(([transports, deletedCount]) =>
                res.render('hinh-thuc-van-chuyen', {
                    transports: multipleMongooseToObject(transports),
                    deletedCount
                })
            )
            .catch(next);
    }

    postHinhThucVanChuyen(req, res, next) {
        const transportation = new Transportation(req.body);
        transportation.save()
            .then(() => res.redirect('/hinh-thuc-van-chuyen'))
            .catch(error => {

            })
    }

    updateHinhThucVanChuyen(req, res, next) {
        Transportation.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/hinh-thuc-van-chuyen'))
            .catch(next);
    }



    deleteHinhThucVanChuyen(req, res, next) {
        Transportation.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    destroyHinhThucVanChuyen(req, res, next) {
        Transportation.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
        }

    storedHinhThucVanChuyen(req, res, next) {
        Transportation.findDeleted({})
            .then((transports) =>
                res.render('stores/luu-tru-van-chuyen', {
                    transports: multipleMongooseToObject(transports)
                })
            )
            .catch(next);
    }

    restoreHinhThucVanChuyen(req, res, next) {
        Transportation.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new HinhThucVanChuyenController();