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
         let { name = "", brand = "" } = req.query;
        name=name.trim();
        brand=brand.trim();
        if(!name&&!brand){
            return res.status(404).json({
                FindProduct:[]
            })
        }
        const FindProduct = await Productmodel.find({
            $or: [
                { name: { $regex: name, $options: "i" } },
                { brand: { $regex: brand, $options: "i" } }
            ]
        })
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