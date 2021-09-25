const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
});

module.exports = mongoose.model('Customer', Customer);