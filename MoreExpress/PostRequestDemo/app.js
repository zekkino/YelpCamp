var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends = [ "tony", "miranda", "justin",
"pieree", "lily"];

app.get("/",function(req, res){
    res.render("home");
});

app.post("/addfriend",function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});


app.get ("/friends", function(req ,res){
    res.render("friends", {friends: friends});
});

app.listen(5000,function (){
    console.log("Server Started!!");

});