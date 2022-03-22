const product_model = require('../schema/productSchema.js')

class ProductDetails {
    static createProduct = async (req, res) => {
        try {
            const result = await product_model.find();
            res.send(result)
        } catch (error) {
            res.send({ success: 'false', message: "product details not valid" })
        }
    }
}

module.exports = ProductDetails;