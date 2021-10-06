const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

const District = new Schema({
   district: { type: String },
   slug: { type: String } 
}, { timestamps: true })

const CityProvince = new Schema({
    cityprovince: {type: String},
    districts: [District] 
}, { timestamps: true });

District.plugin(mongooseDelete, { deletedAt : true, overrideMethods: 'all' });
CityProvince.plugin(mongooseDelete, { deletedAt : true, overrideMethods: 'all' });

module.exports = mongoose.model('CityProvince', CityProvince);