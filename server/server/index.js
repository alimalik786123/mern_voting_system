const express = require('express');
const mongo = require('./database/db');
mongo() 
const router=require("./Routes/createuser")
const display=require("./Routes/display")
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const app = express();
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})
app.get('/', jsonParser,(req, res) => {
  res.send('Hello World!');
});
app.use("/",router)
app.use("/",display)

app.listen(8080, () =>
  console.log('listening'),
);