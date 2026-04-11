const nodemailer=require('nodemailer');
const dortenv=require('dotenv');
dortenv.config();
const sendOTP=async(message,email_id,subject)=>{
    try {
        const transporter= nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:587,
            secure:false,
            auth:{
                user:process.env.EMAIL,
                pass:process.env.PASS
            }
        });
        await transporter.sendMail({
            from:process.env.EMAIL,
            to:email_id,
            subject,
            text:message
        })
    } catch (error) {
        
    }
}
module.exports=sendOTP;