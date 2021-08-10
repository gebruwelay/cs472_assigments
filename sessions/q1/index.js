const express = require("express");
const app = express();
const cookie = require("cookie-parser");
const path = require("path");


app.use(cookie());
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"view"));
app.use(express.urlencoded({extended:false}));
app.use((req,res,next)=>{
    if(!req.cookies.items)
    {
        req.cookies.items = {};
        
    }
    next();
});

app.get("/",(req,res)=>{
       if(req.query.key)
       {
        req.cookies.items[req.query.key] =req.query.value;
       }
       res.render("form",{items:req.cookies.items});
})
app.post("/addCookie",(req,res)=>{
    //req.cookies.items[req.body.key] = req.body.value;
    if(req.cookies.items){
    res.cookie(req.body.key, req.body.value,{maxAge: 1000*60*60*24});
    }
    res.redirect(`/?key=${req.body.key}&value=${req.body.value}`);
});
app.listen(4000, ()=>{
    console.log("running at port 4000!");
});
