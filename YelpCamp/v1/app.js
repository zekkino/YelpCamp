var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var campgrounds = [
    { name: "Salmon Creek", image: "https://byp.cl/media/wysiwyg/Blog/camping-finland.jpg" },
    { name: "Granite Hill", image: "https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1516125062/grand-teton-national-park-wyoming-SCENICCAMP0118.jpg?itok=akrvix61" },
    { name: "Montain Goat's Rest", image: "http://ashwita.com/zen/images/mountainphotography.jpg?w=1400" }
];

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    res.render("campgrounds", { campgrounds: campgrounds });

});

app.post("/campgrounds", function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function (req, res) {
    res.render("new.ejs");
});

app.listen(1000, function () {
    console.log("YelpCamp Started!");
});