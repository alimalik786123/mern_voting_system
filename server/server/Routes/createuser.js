const express = require('express');
const Router = express.Router()
const User = require("../models/Schema");   
const Vote = require("../models/vote/voteschema"); 
const Admin = require("../models/Admin"); 

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const { body, validationResult } = require('express-validator') 
const jwt=require('jsonwebtoken')
const secret="mynameisalimalikmynameisalimalik"

Router.post("/user", jsonParser,
    [body('email').isEmail(),
    body('password').isLength({ min: 5 })]       
    , async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {    
            return res.status(400).json({ errors: errors.array() })
        }
        else {
            await User.create({
                name: req.body.name,
                roll:req.body.roll,       
                email: req.body.email,
                class: req.body.class,
                password:req.body.password



            })
            
            res.json({ success: true })
        }
        // console.log(try1);
    })
    Router.post("/admin", jsonParser,  
    [body('email').isEmail(),
    body('password').isLength({ min: 5 })]       
    , async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {    
            return res.status(400).json({ errors: errors.array() })
        }
        else {
            await Admin.create({
                name: req.body.name,       
                email: req.body.email,
                password:req.body.password



            })
            
            res.json({ success: true })
        }
        // console.log(try1);
    })
Router.post("/login",jsonParser, [body('roll').isNumeric(),
body('password').isLength({ min: 5 })], async (req, res) => {
    var roll = req.body.roll
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    

        let userdata = await User.findOne({roll})
        if (!userdata) {
            return res.status(404).json({ errors: "wrong roll number" })
        }
  
        else if (req.body.password !== userdata.password) {
            return res.status(400).json({ errors: "wrong password" })
        }
        const data={
            user:{
                id:userdata.id 
            }
        } 
        const token=jwt.sign(data,secret)
        return res.json({ success: true,userdata:userdata })
    
   
})

Router.post("/adminlog",jsonParser, [body('email').isEmail(),
body('password').isLength({ min: 8 })], async (req, res) => {
    var email = req.body.email  
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    

        let userdata = await Admin.findOne({email})
        if (!userdata) {
            return res.status(404).json({ errors: "wrong roll number" })
        }
  
        else if (req.body.password !== userdata.password) {
            return res.status(400).json({ errors: "wrong password" })
        }
        const data={
            user:{
                id:userdata.id 
            }
        }
        const token=jwt.sign(data,secret)
        return res.json({ success: true,userdata:userdata }) 
    
   
})
Router.post("/vote", jsonParser
    , async (req, res) => {
        
            await Vote.create({
                name: req.body.name,
                class: req.body.class,
                description:req.body.description,
                candidates:req.body.candidates



            })
            
            res.json({ success: true })
        
        // console.log(try1);
    })
   
    Router.post("/addpoll", jsonParser
    , async (req, res) => {
         
            await Vote.create({

                name: req.body.name,
                class: req.body.class,
                description:req.body.description,
                result:req.body.result,
                candidates:req.body.candidates,     
                by:req.body.email



            })
            
            res.json({ success: true })
        
        // console.log(try1);
    }) 
    Router.post("/up", jsonParser      
    , async (req, res) => {
            
            await Vote.updateOne({"candidates._id":req.body.id},{$inc:{"candidates.$.Count":1}})
            await User.updateOne({"roll":req.body.user},{$push:{"voted":req.body.voteid}})
            
            res.json({ success: true })
        
        // console.log(try1);
    })

    Router.post("/del", jsonParser
    , async (req, res) => {  
            
            // await Vote.updateOne({"candidates._id":req.body.id},{$inc:{"candidates.$.Count":1}})
            // await Vote.updateOne({"candidates._id":req.body.id},{$inc:{"candidates.$.Count":1}})
            // await Vote.remove({"candidates._id":req.body.id})
             await Vote.updateOne({"candidates._id":req.body.id},{$pull:{"candidates":{"_id":req.body.id}}})
            
            res.json({ success:true})   
         
        // console.log(try1); 
    })
    
    Router.post("/addcand", jsonParser
    , async (req, res) => {
            
            await Vote.updateOne({"_id":req.body.id},{$push:{"candidates":{Name:req.body.name,Roll:req.body.roll,Moto:req.body.moto}}})
            await User.updateOne({"roll":req.body.user},{$push:{"voted":req.body.voteid}})
            
            res.json({ success: true })
        
        // console.log(try1);
    })

    Router.post('/votedata',jsonParser,async(req,res)=>{
        try {
            const data1=await User.find({"roll":req.body.roll})  
           res.send([global.data,data1])
        } catch (error) {     
            
        }
    })

    Router.post('/profiledata',jsonParser,async(req,res)=>{
        try {
            const id=req.body.id;
            const data1=await User.find({"_id":{$in:id}})  
           res.send(data1)
        } catch (error) {     
            console.log(error); 
        }
    })
    
    Router.post('/adminpoll',jsonParser,async(req,res)=>{
        try {
            const data1=await Vote.find({"by":req.body.email})  
           res.send(data1)
        } catch (error) {     
            
        }
    })

module.exports = Router