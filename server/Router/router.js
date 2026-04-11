const{InsertProduct,searchProduct,FilterProduct}=require('../controller/Products');
const{createUser,createOTP,VerifyOTP,Login,Logout}=require('../controller/User')
const express=require('express');
const router=express.Router();
router.post('/createProduct',InsertProduct);
router.get('/search',searchProduct);
router.get('/filter',FilterProduct);
router.post('/createuser',createUser);
router.post('/sendotp',createOTP);
router.post('/verifyotp',VerifyOTP);
router.post('/login',Login);
router.post('/logout',Logout);
module.exports=router;