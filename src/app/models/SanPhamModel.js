const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    productID: { type: String },
    productName: { type: String },
    productPrice: { type: String },
    productType: { type: String },
    property: { type: String },
    unit: { type: String },
    img: { type: String },
    supplier: { type: String },
    description: { type: String },
  });

  module.exports = mongoose.model('Product', Product);