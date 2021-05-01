const mongoose=require("mongoose");
const productSchema=new mongoose.Schema({
    name:{type:String,required:true},
    shortDescription:{type:String,required:true},
    description:{type:String,required:true},
    brand:{type:String,required:true},
    category:{type:String,required:true},
    image:{type:String,required:true},
    price:{type:Number,required:true},
    quantity:{type:Number,required:true},
    rating:{type:Number,required:true},
    numReviews:{type:Number,required:true},
});

const Product=mongoose.model('product',productSchema);
module.exports=Product;