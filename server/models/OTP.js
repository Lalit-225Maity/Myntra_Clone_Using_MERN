const{Schema,model}=require('mongoose');
const UserOTP=new Schema({
    email:{
        type:String
    },
    otp:{
        type:String
    }
});
const OTP=model("OTP",UserOTP);
module.exports=OTP 