const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

const Unit = new Schema({
    unitName: { type: String },
}, { timestamps: true });

Unit.plugin(mongooseDelete, { deletedAt : true, overrideMethods: 'all' });

module.exports = mongoose.model('Unit', Unit);