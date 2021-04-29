const express=require("express");
const products=require("./data");

const app=express();
app.use(express.json());
app.get('/api/products',(req,res)=>{
    try {
        res.json(products);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
    
});
app.get('/api/products/:id',(req,res)=>{
    try {
        const product=products.find(product=> product._id===parseInt(req.params.id))
        res.json(product);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
    
});
app.get('/',(req,res)=>{
    res.send("server is ready");
});

app.listen(5000,()=>{
    console.log("serving at http://localhost:5000");
});