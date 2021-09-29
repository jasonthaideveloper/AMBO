const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

const Supplier = new Schema({
    supplierName: { type: String },
    phoneNumber: { type: String },
    address: { type: String },
    district: { type: String },
    cityProvince: { type: String },
    img: { type: String },
    description: { type: String },
}, { timestamps: true });

Supplier.plugin(mongooseDelete, { deletedAt : true, overrideMethods: 'all' });

module.exports = mongoose.model('Supplier', Supplier);