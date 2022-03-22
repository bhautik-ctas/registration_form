const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_Name: { type: String, required: true },
    product_quntity: { type: String, required: true },
    product_Price: { type: Number, required: true }
})

const product_model = mongoose.model('product_details', productSchema);

module.exports = product_model;