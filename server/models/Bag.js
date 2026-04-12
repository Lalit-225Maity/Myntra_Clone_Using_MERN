const{Schema,model}=require('mongoose');
const Bag=new Schema({
    userID:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    product_name:{
        type:String
    },
    product_brand:{
        type:String
    },
    product_price:{
        type:String
    },
    delivery_date:{
        type:Date
    },
    size:{
        type:String
    }
})
const Bags=model("Bag",Bag);
module.exports=Bags;