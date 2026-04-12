const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
dotenv.config();
const Auth=async(req,res,next)=>{
    try {
        const token=req.cookies.token;
        if(!token){
            return res.status(500).json({
                success:false,
                message:"Access Denied"
            })
        }
        const verify=jwt.verify(token,process.env.SECRET);

        req.user=verify;
        next();
    } catch (error) {
        
    }
}
module.exports=Auth;