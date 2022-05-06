const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

const General = new Schema({
    imgURL: { type: String },
    slug: { type: String }
}, { timestamps: true })


General.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('General', General);