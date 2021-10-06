const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

const Transportation = new Schema({
    title: { type: String },
    content: { type: String },
}, { timestamps: true });

Transportation.plugin(mongooseDelete, { deletedAt : true, overrideMethods: 'all' });

module.exports = mongoose.model('Transportation', Transportation);