const mongoose=require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_DB);
        console.log(`mongodb connect`);
        
    } catch (error) {
        
    }
}
module.exports=connectDB