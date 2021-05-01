const express=require("express");
const { Seed, products, singleProduct } = require("../Controllers/ProductController");

const productRouter=express.Router();
productRouter.get('/',products);
productRouter.get('/seed',Seed);
productRouter.get('/:id',singleProduct);

module.exports=productRouter;