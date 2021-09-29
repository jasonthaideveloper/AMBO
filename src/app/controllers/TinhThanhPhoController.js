const CityProvince = require('../models/TinhThanhPhoModel');
const District = require('../models/QuanHuyenModel');
const { multipleMongooseToObject, mongooseToOject } = require('../../util/mongoose');


class TinhThanhPhoController {
    // [GET] /thuoc-tinh-chung
    getTinhThanhPho(req, res, next) {
        Promise.all([CityProvince.find({}), CityProvince.countDocumentsDeleted()])
            .then(([cities, deletedCount]) =>
                res.render('tinh-thanh-pho', {
                    cities: multipleMongooseToObject(cities),
                    deletedCount
                })
            )
            .catch(next);
    }

    postTinhThanhPho(req, res, next) {
        const cityprovince = new CityProvince(req.body);
        console.log(cityprovince);
        cityprovince.save()
            .then(() => res.redirect('/tinh-thanh-pho'))
            .catch(error => {

            })
    }

    updateTinhThanhPho(req, res, next) {
        CityProvince.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/tinh-thanh-pho'))
            .catch(next);
    }



    deleteTinhThanhPho(req, res, next) {
        CityProvince.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    destroyTinhThanhPho(req, res, next) {
        CityProvince.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
        }

    storedTinhThanhPho(req, res, next) {
        CityProvince.findDeleted({})
            .then((cities) =>
                res.render('stores/luu-tru-tinh-thanh-pho', {
                    cities: multipleMongooseToObject(cities)
                })
            )
            .catch(next);
    }

    restoreTinhThanhPho(req, res, next) {
        CityProvince.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new TinhThanhPhoController();
