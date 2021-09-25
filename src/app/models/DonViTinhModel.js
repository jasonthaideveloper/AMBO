const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Unit = new Schema({
    unitName: { type: String },
});

module.exports = mongoose.model('Unit', Unit);