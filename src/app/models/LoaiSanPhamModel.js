const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Type = new Schema({
    typeName: { type: String },
});

module.exports = mongoose.model('Type', Type);