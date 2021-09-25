const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Mass = new Schema({
    massName: { type: String }
});

module.exports = mongoose.model('Mass', Mass);