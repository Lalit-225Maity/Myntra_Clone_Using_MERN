const { Schema, model } = require('mongoose');
const UserOTP = new Schema({
    email: {
        type: String
    },
    otp: {
        type: String
    },
    createdAt: {
        type: Date,
        default:Date.now,
        expires: 300
    }
},);
const OTP = model("OTP", UserOTP);
module.exports = OTP 