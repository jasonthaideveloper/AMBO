const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

const Product = new Schema({
  productId: { type: String },
  productName: { type: String },
  productPriceIn: { type: String },
  productPriceOut: { type: String },
  productType: { type: String },
  value: { type: String },
  propertyType: { type: String },
  unit: { type: String },
  img: { type: String },
  supplier: { type: String },
  description: { type: String },
}, { timestamps: true });

Product.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('Product', Product);