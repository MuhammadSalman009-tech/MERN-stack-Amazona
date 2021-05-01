const { products } = require("../data");
const Product = require("../Models/ProductModel");

module.exports.Seed=async(req,res)=>{
    try {
        const savedProducts=await Product.insertMany(products);
        res.send(savedProducts);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
    
};
module.exports.products=async(req,res)=>{
    try {
        const products=await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
    
};
module.exports.singleProduct=async(req,res)=>{
    try {
        const product=await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
    
};