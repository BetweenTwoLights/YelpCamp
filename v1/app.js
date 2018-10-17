var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Salmon Creek", image: "http://www.suttonfalls.com/communities/4/004/012/498/244//images/4628314067.jpg"},
        {name: "Granite Hill", image: "https://www.visitmesaverde.com/media/399916/morefield-campground_mesa-verde_0072_1000x667.jpg"},
        {name: "Mountain Goat's Rest", image: "https://www.nps.gov/zion/planyourvisit/images/South_CG_r_1.jpg"}
    ]

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    //get data from form & add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
})

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started")
});

