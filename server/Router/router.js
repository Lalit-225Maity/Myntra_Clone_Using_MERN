const{InsertProduct,searchProduct,FilterProduct}=require('../controller/Products');
const express=require('express');
const router=express.Router();
router.post('/createProduct',InsertProduct);
router.get('/search',searchProduct);
router.get('/filter',FilterProduct);
module.exports=router;