const CityProvince = require('../models/TinhThanhPhoModel');
const District = require('../models/QuanHuyenModel');
const { multipleMongooseToObject, mongooseToOject } = require('../../util/mongoose');


class QuanHuyenController {
    // [GET] /thuoc-tinh-chung
    getQuanHuyen(req, res, next) {
        Promise.all([CityProvince.find({}), District.find({}), District.countDocumentsDeleted()])
            .then(([cities, districts, deletedCount]) =>
                res.render('quan-huyen', {
                    cities: multipleMongooseToObject(cities),
                    districts: multipleMongooseToObject(districts),
                    deletedCount
                })
            )
            .catch(next);
    }

    postQuanHuyen(req, res, next) {
        const district = new District(req.body);
        district.save()
            .then(() => res.redirect('/quan-huyen'))
            .catch(error => {

            })
    }

    updateQuanHuyen(req, res, next) {
        District.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/quan-huyen'))
            .catch(next);
    }

    deleteQuanHuyen(req, res, next) {
        District.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    destroyQuanHuyen(req, res, next) {
        District.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
        }

    storedQuanHuyen(req, res, next) {
        District.findDeleted({})
            .then((districts) =>
                res.render('stores/luu-tru-quan-huyen', {
                    districts: multipleMongooseToObject(districts)
                })
            )
            .catch(next);
    }

    restoreQuanHuyen(req, res, next) {
        District.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new QuanHuyenController();
