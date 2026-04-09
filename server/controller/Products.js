const product = require('../api/product');
const Productmodel = require('../models/Products');
const InsertProduct = async (req, res) => {
    try {
        const Productdetail = await Productmodel.insertMany(product);
        res.status(200).json({
            Productdetail: Productdetail
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
const searchProduct = async (req, res) => {
    try {
        const { name = "", brand = "" } = req.query;
        const MyProduct = {};
        if (name.trim() === "" && brand.trim() === "") {
            return res.status(200).json({ FindProduct: [] });
        }

        if (name) {
            MyProduct.name = { $regex: name, $options: "i" };
        }
        if (brand) {
            MyProduct.brand = { $regex: brand, $options: "i" };
        }

        const FindProduct = await Productmodel.find(MyProduct)
        res.status(200).json({
            FindProduct: FindProduct
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
module.exports = { InsertProduct, searchProduct }