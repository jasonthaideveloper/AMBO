const Unit = require('../models/DonViTinhModel');
const { multipleMongooseToObject, mongooseToOject } = require('../../util/mongoose');

class DonViTinhController {
    // [GET] /thuoc-tinh-chung
    getDonViTinh(req, res, next) {
        Promise.all([Unit.find({}), Unit.countDocumentsDeleted()])
            .then(([units, deletedCount]) =>
                res.render('don-vi-tinh', {
                    units: multipleMongooseToObject(units),
                    deletedCount
                })
            )
            .catch(next);
    }

    postDonViTinh(req, res, next) {
        const unit = new Unit(req.body);
        unit.save()
            .then(() => res.redirect('/don-vi-tinh'))
            .catch(error => {

            })
    }

    updateDonViTinh(req, res, next) {
        Unit.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/don-vi-tinh'))
            .catch(next);
    }



    deleteDonViTinh(req, res, next) {
        Unit.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    destroyDonViTinh(req, res, next) {
        Unit.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
        }

    storedDonViTinh(req, res, next) {
        Unit.findDeleted({})
            .then((units) =>
                res.render('stores/luu-tru-don-vi-tinh', {
                    units: multipleMongooseToObject(units)
                })
            )
            .catch(next);
    }

    restoreDonViTinh(req, res, next) {
        Unit.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new DonViTinhController();

