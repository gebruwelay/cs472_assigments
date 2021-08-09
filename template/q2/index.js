const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const urlencoded = bodyParser.urlencoded({extended:false});
app.set("view engine", "ejs")
app.set("views" , path.join(__dirname,"view"));

app.get("/", (req, res)=>{
    res.render("index");
});
app.post("/result",urlencoded, (req,res)=>{
    console.log(`Name: ${req.body.name} with age of ${req.body.age}`);
});
app.listen(3002);