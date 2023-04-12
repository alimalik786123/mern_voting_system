const mongoose = require('mongoose');
const schema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    class:{
        type:String,
        
    },
    description:{
        type:String,
        required:true
    },
    candidates:[{
        Name:String,
        Class:String,
        Moto:String,
        Count:Number
    }]
    
    
})
const User=mongoose.model("vote",schema)
module.exports=mongoose.model("vote",schema)