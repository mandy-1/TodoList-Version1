const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

// console.log(date);

const app = express();

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const items =["Eat","Sleep","Repeat"];
const workItems =[];
app.get("/", function (req, res) {
   let day = date.getDate();
   res.render("list", { listTitle: day , newListItem : items})

})

app.post("/" , function (req,res){
   // console.log(req.body);
   let item = req.body.newItem
   if(req.body.list === "Work"){
      workItems.push(item);
      res.redirect("/work");
   }
   else{
      items.push(item);
      res.redirect("/");
   }
  
})

app.get("/work" , function (req,res){
   res.render("list" , {listTitle:"Work List" , newListItem : workItems})
})


app.listen(3000, function () {
   console.log("yesss");
})