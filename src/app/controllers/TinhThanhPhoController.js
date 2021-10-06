const CityProvince = require('../models/TinhThanhPhoModel');
const District = require('../models/TinhThanhPhoModel');
const { multipleMongooseToObject, mongooseToOject } = require('../../util/mongoose');


class TinhThanhPhoController {
    // [GET] /thuoc-tinh-chung
    getTinhThanhPho(req, res, next) {
        Promise.all([CityProvince.find({}), District.find({}), CityProvince.countDocumentsDeleted()])
            .then(([cities, districts, deletedCount]) =>
                res.render('tinh-thanh-pho', {
                    cities: multipleMongooseToObject(cities),
                    districts: multipleMongooseToObject(districts),
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
                error.send('ERROR !!!');
            })
    }

    updateQuanHuyenToThanhPho(req, res, next) {
        CityProvince.updateOne({ _id: req.params.id }, { $push: { districts: { district: req.body.district } } })
            .then(() => res.redirect('/tinh-thanh-pho'))
            .catch(next);
    }

    // destroyQuanHuyenToThanhPho(req, res, next) {
    //     // console.log(req.params);
    //     // console.log(req.body);
    //     // Promise.all(CityProvince.findOne({ _id: req.params.id }), District.findOneAndDelete({ _id: req.params.id }))
    //     //     .then(() => res.redirect('back'))
    //     //     .catch(next);
    //     const id = req.params.id;
    //     console.log(id);
    //     CityProvince.deleteOne({$pull: {districts: {_id: id}}})
    //         .then(() => res.redirect('back'))
    //         .catch(next);
    // }

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
