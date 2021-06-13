const express=require("express");
const bodyParser=require("body-parser");
const app=express();
var items=[];
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",function(req,res){
    
   
  res.render("list",{newListItem:items});

    
    
})
app.use("/",function(req,res){
    var item=req.body.freshItem;
    items.push(item);
    res.redirect("/");

})
app.listen("3004",function(){
    console.log("server started at 3004");
})