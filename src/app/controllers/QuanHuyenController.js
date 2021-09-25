const CityProvince = require('../models/TinhThanhPhoModel');
const District = require('../models/QuanHuyenModel');
const { multipleMongooseToObject, mongooseToOject } = require('../../util/mongoose');


class QuanHuyenController {
    // [GET] /thuoc-tinh-chung
    getQuanHuyen(req, res, next) {
        Promise.all([CityProvince.find({}), District.find({})])
            .then(([cities, districts]) =>
                res.render('quan-huyen', {
                    cities: multipleMongooseToObject(cities),
                    districts: multipleMongooseToObject(districts)
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
}

module.exports = new QuanHuyenController();
