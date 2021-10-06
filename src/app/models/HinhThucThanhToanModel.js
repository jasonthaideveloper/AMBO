const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

const PayMents = new Schema({
    title: { type: String },
    content: { type: String },
}, { timestamps: true });

PayMents.plugin(mongooseDelete, { deletedAt : true, overrideMethods: 'all' });

module.exports = mongoose.model('PayMents', PayMents);