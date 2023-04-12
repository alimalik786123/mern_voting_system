const express = require('express');
const Router = express.Router()
const User = require("../models/Schema");
const Vote = require("../models/vote/voteschema");

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
        return res.json({ success: true,token:token })
    
   
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

module.exports = Router