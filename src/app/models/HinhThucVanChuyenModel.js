const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Transportation = new Schema({
    title: { type: String },
    content: { type: String },
});

module.exports = mongoose.model('Transportation', Transportation);