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
    result:{ 
        type:String,
        required:true
    }, 
    candidates:[{
        Name:String,
        Roll:Number,
        Moto:String,
        Count:{type:Number,
              default:0        
        }
    }],
    by:{
        type:String
    }
    
    
})
const User=mongoose.model("vote",schema)
module.exports=mongoose.model("vote",schema)