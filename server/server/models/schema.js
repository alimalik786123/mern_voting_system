const mongoose = require('mongoose');
const schema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    roll:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    class:{
        type:String,
        
    },
    password:{
        type:String,
        required:true
    }
})
const User=mongoose.model("user",schema)
module.exports=mongoose.model("user",schema)