const express=require("express");
const { Seed } = require("../Controllers/UserController");

const userRouter=express.Router();
userRouter.get('/seed',Seed);

module.exports=userRouter;