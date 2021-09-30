const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

const Customer = new Schema({
    customerName: { type: String },
    gender: { type: String },
    phoneNumber: { type: Number },
    email: { type: String },
    address: { type: String },
    district: { type: String },
    img: { type: String },
    cityProvince: { type: String },
    description: { type: String },
}, { timestamps: true });

Customer.plugin(mongooseDelete, { deletedAt : true, overrideMethods: 'all' });

module.exports = mongoose.model('Customer', Customer);