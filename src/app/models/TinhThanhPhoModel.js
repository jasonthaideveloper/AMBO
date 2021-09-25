const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');


const CityProvince = new Schema({
    cityprovince: { type: String },
}, { timestamps: true });

CityProvince.plugin(mongooseDelete, { deletedAt : true, overrideMethods: 'all' });

module.exports = mongoose.model('CityProvince', CityProvince);