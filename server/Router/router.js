const{InsertProduct,searchProduct}=require('../controller/Products');
const express=require('express');
const router=express.Router();
router.post('/createProduct',InsertProduct);
router.get('/search',searchProduct);
module.exports=router;