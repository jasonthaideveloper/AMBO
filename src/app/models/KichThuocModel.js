const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Size = new Schema({
    sizeName: { type: String },
});

module.exports = mongoose.model('Size', Size);