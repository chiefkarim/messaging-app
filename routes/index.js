const express = require("express");
const router = express.Router();

//make a note found route

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" ,messages:messages});
});
router.get("/new", function (req, res, next) {
  res.render('new',{title:'new'});
});
router.post('/new',function(req,res,next){
  console.log(req.body)
  messages.unshift({text:req.body.message,user:req.body.userName,added: new Date()})
  res.redirect('/');

})



module.exports = router;
