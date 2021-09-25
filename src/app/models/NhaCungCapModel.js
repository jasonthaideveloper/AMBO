const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Supplier = new Schema({
    supplierName: { type: String },
    phoneNumber: { type: String },
    address: { type: String },
    district: { type: String },
    cityProvince: { type: String },
    img: { type: String },
    description: { type: String },
});

module.exports = mongoose.model('Supplier', Supplier);