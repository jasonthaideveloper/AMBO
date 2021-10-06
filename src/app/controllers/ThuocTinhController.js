const Property = require('../models/ThuocTinhModel');
const { multipleMongooseToObject, mongooseToOject } = require('../../util/mongoose');


class ThuocTinhController {
    // [GET] /thuoc-tinh-chung
    getThuocTinh(req, res, next) {
        Promise.all([Property.find({}), Property.countDocumentsDeleted()])
            .then(([properties, deletedCount]) =>
                res.render('thuoc-tinh', {
                    properties: multipleMongooseToObject(properties),
                    deletedCount
                })
            )
            .catch(next);
    }

    postThuocTinh(req, res, next) {
        const mass = new Property(req.body);
        mass.save()
            .then(() => res.redirect('/thuoc-tinh'))
            .catch(error => {

            })
    }

    updateThuocTinh(req, res, next) {
        Property.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/thuoc-tinh'))
            .catch(next);
    }



    deleteThuocTinh(req, res, next) {
        Property.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    destroyThuocTinh(req, res, next) {
        Property.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
        }

    storedThuocTinh(req, res, next) {
        Property.findDeleted({})
            .then((properties) =>
                res.render('stores/luu-tru-thuoc-tinh', {
                    properties: multipleMongooseToObject(properties)
                })
            )
            .catch(next);
    }

    restoreThuocTinh(req, res, next) {
        Property.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new ThuocTinhController();
