const Bag = require('../models/Bag');

const CreateBag = async (req, res) => {
    try {
        const token = req.user;
        const { product_name, product_brand, product_price, delivery_date, size } = req.body;
        const userbag = new Bag({
            userID: token.id,
            product_name, product_brand, product_price, delivery_date, size
        })
        await userbag.save();
        res.status(200).json({
            userbag
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
const getBag = async (req, res) => {
    try {
        const token = req.user;
        const checkUser = await Bag.find({ userID: token.id })
        res.status(200).json({
            checkUser
        })
    } catch (error) {
        console.error(error.message);

        res.status(500).json({
            message: error.message
        })
    }
}
module.exports = { CreateBag, getBag }