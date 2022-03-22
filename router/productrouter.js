const route2 = require('express').Router();
const ProductDetails = require('../controller/productContrroller.js');
const middleware = require('../middleware/middleware.js')


route2.get('/product', middleware, ProductDetails.createProduct);

module.exports = route2;