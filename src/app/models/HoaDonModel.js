const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bill = new Schema({
    billName: { type: String },
    supplierId: { type: String },
    supplierName: { type: String },
    customerId: { type: String },
    customerName: { type: String },
    productId: { type: String },
    productName: { type: String },
    productType: { type: String },
    property: { type: String },
    quantity: { type: Number },
    unit: { type: String },
    price: { type: Number },
    amount: { type: Number },
    total: { type: Number },
    payments: { type: String },
    transportation: { type: String },
    description: { type: String },
});

module.exports = mongoose.model('Bill', Bill);