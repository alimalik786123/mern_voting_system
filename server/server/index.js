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
const server=app.listen(8080, () =>
  console.log('listening'),
);
const io=require('socket.io')(server,{
  pingTimeout:600000,
  cors:{
    origin:"http://localhost:3000"
  },
})
io.on("connection",(socket)=>{
  console.log('connected to socket.io ');
})

app.get('/', jsonParser,(req, res) => {
  res.send('Hello World!');
});
app.use("/",router)
app.use("/",display)

