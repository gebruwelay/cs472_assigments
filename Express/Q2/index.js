const express = require ("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const port = 3003;
const date = new Date();
const hour = date.getHours();
(hour<18 && hour>=6)?app.use("/css",express.static(
    path.join(__dirname,"../","Q2","css","day.css")
)):app.use("/css",express.static(
    path.join(__dirname,"../","Q2","css","night.css")
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

app.post("/result",urlencoded, (req,res)=>{
    console.log(`welcome ${req.body.name} with age of ${req.body.age}`);
});
app.listen(port, ()=>{
    console.log(`running at port ${port}`);
});
