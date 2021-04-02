import express from "express";
import products from "./data.js";


const app=express();
app.use(express.json());
app.get('/api/products',(req,res)=>{
    res.send(products);
});
app.get('/',(req,res)=>{
    res.send("server is ready");
});

app.listen(5000,()=>{
    console.log("serving at http://localhost:5000");
});