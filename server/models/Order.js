const{Schema,model}=require('mongoose');
const Order=new Schema({
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
    },
    image:{
        type:String
    },
    payment:{
        type:String
    }
   
})
const User_Order=model('Order',Order);
module.exports=User_Order;