const Size = require('../models/KichThuocModel');
const { multipleMongooseToObject, mongooseToOject } = require('../../util/mongoose');


class KichThuocController {
    // [GET] /thuoc-tinh-chung
    getKichThuoc(req, res, next) {
        Promise.all([Size.find({}), Size.countDocumentsDeleted()])
            .then(([sizes, deletedCount]) =>
                res.render('kich-thuoc', {
                    sizes: multipleMongooseToObject(sizes),
                    deletedCount
                })
            )
            .catch(next);
    }

    postKichThuoc(req, res, next) {
        const size = new Size(req.body);
        size.save()
            .then(() => res.redirect('/kich-thuoc'))
            .catch(error => {

            })
    }

    updateKichThuoc(req, res, next) {
        Size.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/kich-thuoc'))
            .catch(next);
    }



    deleteKichThuoc(req, res, next) {
        Size.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    destroyKichThuoc(req, res, next) {
        Size.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
        }

    storedKichThuoc(req, res, next) {
        Size.findDeleted({})
            .then((sizes) =>
                res.render('stores/luu-tru-kich-thuoc', {
                    sizes: multipleMongooseToObject(sizes)
                })
            )
            .catch(next);
    }

    restoreKichThuoc(req, res, next) {
        Size.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new KichThuocController();