const Volume = require('../models/TheTichModel');
const { multipleMongooseToObject, mongooseToOject } = require('../../util/mongoose');

class TheTichController {
    // [GET] /thuoc-tinh-chung
    getTheTich(req, res, next) {
        Promise.all([Volume.find({}), Volume.countDocumentsDeleted()])
            .then(([volumes, deletedCount]) =>
                res.render('the-tich', {
                    volumes: multipleMongooseToObject(volumes),
                    deletedCount
                })
            )
            .catch(next);
    }

    postTheTich(req, res, next) {
        const volume = new Volume(req.body);
        volume.save()
            .then(() => res.redirect('/the-tich'))
            .catch(error => {

            })
    }

    updateTheTich(req, res, next) {
        Volume.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/the-tich'))
            .catch(next);
    }



    deleteTheTich(req, res, next) {
        Volume.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    destroyTheTich(req, res, next) {
        Volume.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
        }

    storedTheTich(req, res, next) {
        Volume.findDeleted({})
            .then((volumes) =>
                res.render('stores/luu-tru-the-tich', {
                    volumes: multipleMongooseToObject(volumes)
                })
            )
            .catch(next);
    }

    restoreTheTich(req, res, next) {
        Volume.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new TheTichController();
