const { users } = require("../data");
const User = require("../Models/UserModel")

module.exports.Seed=async(req,res)=>{
    try {
        const createdUsers=await User.insertMany(users);
        res.send({createdUsers});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
    
}