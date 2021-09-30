const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

const Volume = new Schema({
    volumeName: { type: String },
}, { timestamps: true });

Volume.plugin(mongooseDelete, { deletedAt : true, overrideMethods: 'all' });

module.exports = mongoose.model('Volume', Volume);