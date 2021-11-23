const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

// const Product = new Schema({
//         productName: { type: String },
//         unit: { type: String },
//         quantity: { type: Number },
//         price: { type: Number },
// }, { timestamps: true })

const Bill = new Schema({
    billId: { type: String },
    billName: { type: String },
    customerId: { type: String },
    customerName: { type: String },
    products: [{
        productName: { type: String },
        intoMoney: { type: String },
        quantity: { type: String },
        price: { type: String }
    }],
    placeOfDelivery: { type: String },
    total: { type: Number },
    payments: { type: String },
    transportation: { type: String },
    description: { type: String },
}, { timestamps: true });

Bill.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('Bill', Bill);