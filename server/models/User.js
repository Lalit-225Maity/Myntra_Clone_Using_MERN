const{Schema,model}=require('mongoose');
const User=new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone_number:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    Pin:{
        type:String,
        required:true
    }
});
const users=model("User",User);
module.exports=users