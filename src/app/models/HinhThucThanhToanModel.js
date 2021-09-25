const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PayMents = new Schema({
    title: { type: String },
    content: { type: String },
});

module.exports = mongoose.model('PayMents', PayMents);