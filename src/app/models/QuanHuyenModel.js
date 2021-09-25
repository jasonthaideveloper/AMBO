const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');


const District = new Schema({
    cities: { type: String },
    district: { type: String },
}, { timestamps: true });

District.plugin(mongooseDelete, { deletedAt : true, overrideMethods: 'all' });

module.exports = mongoose.model('District', District);