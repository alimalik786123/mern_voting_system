const express = require('express');
const Router = express.Router()
const User = require("../models/Schema");

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const { body, validationResult } = require('express-validator')

Router.post('/votedata',jsonParser,async(req,res)=>{
    try {
        const data1=User.find({roll:req.body.user}).toArray(async(err,res)=>{
            console.log(res);
            global.data2=res
        })
       console.log(global.data1);
       res.send([global.data,global.data2])
    } catch (error) {
        
    }
})
Router.post('/userdata',(req,res)=>{
    try {
        res.send([global.data1])
    } catch (error) {
        
    }
})
module.exports=Router 