const mongoose = require('mongoose');
const schema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
   
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    votes:[String]   
})
const User=mongoose.model("admin",schema)
module.exports=mongoose.model("admin",schema) 