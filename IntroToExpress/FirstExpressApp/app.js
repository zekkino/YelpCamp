var express = require("express");
var app = express();
var port = 3000;



app.get("/",function(req, res){
    res.send ("hi there!");
});


app.get("/bye",function(req, res){
    res.send ("Goodbye!");
});


app.get("/dog",function(req, res){
    res.send ("MEOW!");
});


app.get("/r/:subredditname", function(req, res ){
    res.send("WELCOME TO A SUBREDDIT!");
});

app.get("/r/subbreditName/comments/id/title/");
  

app.get("*",function(req, res){
    res.send("you are star!!");
});



app.listen(port, function(){
    console.log("server has started!");
});