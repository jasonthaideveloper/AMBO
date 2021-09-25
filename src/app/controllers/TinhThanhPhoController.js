const CityProvince = require('../models/TinhThanhPhoModel');
const District = require('../models/QuanHuyenModel');
const { multipleMongooseToObject, mongooseToOject } = require('../../util/mongoose');


class TinhThanhPhoController {
    // [GET] /thuoc-tinh-chung
    getTinhThanhPho(req, res, next) {
        Promise.all([CityProvince.find({}), CityProvince.findById(req.params.id)])
            .then(([cities, city]) => 
                res.render('tinh-thanh-pho', {
                    cities: multipleMongooseToObject(cities),
                    city: mongooseToOject(city)
                })
            )
            .catch(next);
    }

    getId(req,res, next) {
        CityProvince.findById(req.params.id)
            .then(city => 
                res.render('edit-tinh-thanh-pho', mongooseToOject(city))
            )
            .catch(next);
    }

    updateTinhThanhPho(req, res, next) {
        CityProvince.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/tinh-thanh-pho'))
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

    // edit(req, res, next) {
    //     CityProvince.findById(req.params.id)
    //         .then(city => res.render('/tinh-thanh-pho', {
    //             city: mongooseToOject(city)
    //         }))
    //         .catch(next);
    //         console.log(req.params.id);
    // }
}

module.exports = new TinhThanhPhoController();
