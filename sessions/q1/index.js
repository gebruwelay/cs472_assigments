const express = require("express");
const app = express();
const cookie = require("cookie-parser");
const path = require("path");


app.use(cookie());
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"view"));
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
       if(req.query.key)
       {
        req.cookies.items[req.query.key] =req.query.value;
       }
       res.render("form",{items:req.cookies});
})
app.post("/addCookie",(req,res)=>{
    //req.cookies.items[req.body.key] = req.body.value;
    
    res.cookie(req.body.key, req.body.value,{maxAge: 1000*60*60*24});
    
    res.redirect(`/`);
});
app.listen(4000, ()=>{
    console.log("running at port 4000!");
});
