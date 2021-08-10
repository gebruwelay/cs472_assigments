const express = require ("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
app.use(session({secret:"salt",
saveUninitialized:false,
resave:false}));
app.use((req,res,next)=>{
    if(!req.session.person)
    {
        req.session.person = {};
    }
    next();
});

const port = 3003;
const date = new Date();
const hour = date.getHours();
(hour<18 && hour>=6)?app.use("/css",express.static(
    path.join(__dirname,"../","Q2","css","day.css")
)):app.use("/css",express.static(
    path.join(__dirname,"css","night.css")
))
app.get("/",(req, res)=>{
    res.send(`
     <!DOCTYPE html>
     <html lang="eng">
     <head>
     <meta charset="utf-8">
     <title>Q3</title>
     <link rel="stylesheet" href="/css">
     </head>
     <body>
     <form action="/result" method= "post">
     name  <input type = "text" name = "name" value ="Gebru"/>  
     Age<input type="text" name = "age" value ="30"> 
     <button>Submit Query</button>
     </form>
     </body>
     </html>`);
});

const urlencoded = bodyParser.urlencoded({extended:false});
app.get("/output", (req,res)=>{
    for(let i in req.session.person){
    console.log(req.session.person);
    console.log(`welcome ${i} with age of ${req.session.person[i]}`);
    }
});
app.post("/result",urlencoded, (req,res)=>{
    req.session.person[req.body.name] = req.body.age;
    res.redirect(303,`/output`);
});
app.listen(port, ()=>{
    console.log(`running at port ${port}`);
});
