const Order = require('../models/Order');
const createOrder = async (req, res) => {
    try {
        const user = req.user;
        const { bag } = req.body;
        const newOrder = bag.map((item) => {
            return {
                userID: user._id,
                product_name: item.product_name,
                product_brand: item.product_brand,
                product_price: item.product_price,
                delivery_date: item.delivery_date,
                size: item.size,
                image: item.image,
                payment: "Pay on Delivery"
            }
        })
        const OrderPush = await Order.insertMany(newOrder)
        res.status(200).json({
            success: true,
            message: "Order is given",
            newOrder: newOrder
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
const FetchOrder = async (req, res) => {
    try {
        const user = req.user;
        const Fetch = await Order.find({
            userID: { $in: user._id }
        })
        res.status(200).json({
            message: "Fetch Complete",
            Fetch: Fetch
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
const CancelOrder = async (req, res) => {
    try {
        const user = req.user;
        const { order_id } = req.body;
        const cancel = await Order.deleteOne({ _id: order_id });
        res.status(200).json({
            cancel,
            message: error.message
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
module.exports = { createOrder, CancelOrder, FetchOrder }