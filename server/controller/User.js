const User = require('../models/User');
const sendEmail = require('../sendOTP/sendOTP');
const jwt = require('jsonwebtoken');
const OTP = require('../models/OTP');
const dotenv=require('dotenv');
dotenv.config();
const createUser = async (req, res) => {
    try {
        const { username, email, phone_number, address, Pin } = req.body;
        if (!username || !email || !phone_number || !address || !Pin) {
            return res.status(404).json({
                message: "something went wrong"
            })
        }
        const checkexists = await User.findOne({ email });
        if (checkexists) {
            return res.status(404).json({
                message: "User is already exists"
            })
        }
        if (phone_number.length !== 10) {
            res.status(404).json({
                message: "Phone Number Must be 10 digits"
            })
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            res.status(404).json({
                message: "Invalid Email ID"
            })
        }
        if (Pin.length !== 6) {
            res.status(404).json({
                message: "Invalid Pin Number"
            })
        }

        const Users = new User({ username, email, phone_number, address, Pin });
        await Users.save();
        res.status(200).json({
            Users: Users,
            message: "User is Created"
        })

    } catch (error) {

    }
}
const createOTP = async (req, res) => {
    try {
        const { email } = req.body;
        const verify = await User.findOne({ email })
        if (!verify) {
            return res.status(404).json({
                message: "Invalid Email ID"
            })
        }
        const OTPcreate = Math.floor(100000 + Math.random() * 999999);
        const OTPgen = new OTP({ email: verify.email, otp: OTPcreate });
        await OTPgen.save();
        await sendEmail(`Your verification code for password reset is${OTPcreate}`, verify.email, "verify");
        res.status(200).json({
            OTPcreate: OTPcreate
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const VerifyOTP = async (req, res) => {
    try {
        const { email, otp } = req.body;
        const check = await OTP.findOne({ email, otp });
        if (!check) {
            res.status(404).json({
                message: "Invalid OTP"
            })
        }
        const verifyuser = await User.findOne({ email });
        const token = jwt.sign({ id: verifyuser._id, email: verifyuser.email }, process.env.SECRET);
        res.cookie("token", token);
        await OTP.deleteOne({ email, otp });
        res.status(200).json({
            message: "OTP verified"
        })
    } catch (error) {

    }
}
const Login = async (req, res) => {
    try {
        const { email } = req.body;
        const verifyEmail = await User.findOne({ email })
        if (!verifyEmail) {
            return res.status(404).json({
                message: "Invalid Email ID"
            })
        }
        res.status(200).json({
            verifyEmail
        })

    } catch (error) {

    }
}
const Logout=async(req,res)=>{
    res.clearCookie("token");
    res.status(200).json({
        message:"User is Logout"
    })
}
module.exports = { createUser, createOTP, VerifyOTP,Login,Logout }