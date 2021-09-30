const Type = require('../models/LoaiSanPhamModel');
const { multipleMongooseToObject, mongooseToOject } = require('../../util/mongoose');


class LoaiSanPhamController {
    // [GET] /thuoc-tinh-chung
    getLoaiSanPham(req, res, next) {
        Promise.all([Type.find({}), Type.countDocumentsDeleted()])
            .then(([types, deletedCount]) =>
                res.render('loai-san-pham', {
                    types: multipleMongooseToObject(types),
                    deletedCount
                })
            )
            .catch(next);
    }

    postLoaiSanPham(req, res, next) {
        const type = new Type(req.body);
        type.save()
            .then(() => res.redirect('/loai-san-pham'))
            .catch(error => {

            })
    }

    updateLoaiSanPham(req, res, next) {
        Type.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/loai-san-pham'))
            .catch(next);
    }



    deleteLoaiSanPham(req, res, next) {
        Type.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    destroyLoaiSanPham(req, res, next) {
        Type.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
        }

    storedLoaiSanPham(req, res, next) {
        Type.findDeleted({})
            .then((types) =>
                res.render('stores/luu-tru-loai-san-pham', {
                    types: multipleMongooseToObject(types)
                })
            )
            .catch(next);
    }

    restoreLoaiSanPham(req, res, next) {
        Type.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new LoaiSanPhamController();