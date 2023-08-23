const express = require("express");
const router = express.Router();
require('dotenv').config()

//make a note found route

//database
const mongoDB = process.env.DATABASE_API
const mongoose = require('mongoose')
const messagesModel=require('../models/messages')
mongoose.set('strictQuery',false)

let messages=[]


/* GET home page. */
router.get("/", function (req, res, next) {
 
  getMessages().then(()=>{
    res.render("index", { title: "Messaging App" ,messages:messages});

  })
});

router.get("/new", function (req, res, next) {
  res.render('new',{title:'new message'});
});

router.post('/new',function(req,res,next){
  console.log(req.body)
  sendMessageToDatabase(req.body.name,req.body.message).then(()=>{res.redirect('/')})

})

async function getMessages(){
  await mongoose.connect(mongoDB)
  const result= await messagesModel.find().sort({date:-1}).limit(10)
  console.log(`async `, messages)
  messages= result
}

async function sendMessageToDatabase(name,message){
  await mongoose.connect(mongoDB)
  const messageM = new messagesModel({name:name,message:message,date:new Date()})
  await messageM.save()
  console.log(`new message`,{name:name,message:message,date:new Date()})  
}


module.exports = router;
