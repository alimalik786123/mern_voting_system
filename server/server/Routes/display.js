const express = require('express');
const Router = express.Router()
const User = require("../models/Schema");

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const { body, validationResult } = require('express-validator')

 
Router.post('/userdata',(req,res)=>{
    try {
        res.send([global.data1])
    } catch (error) {
        
    }
})
module.exports=Router 