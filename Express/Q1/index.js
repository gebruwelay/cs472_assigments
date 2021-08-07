const express = require("express");
const http = require("http")
const app = express();


app.get("/",(req,res)=>{
    let name = req.query.name;
    let age = req.query.age;
    if(!name){
        name ="person";
    }
    if(!age){
        age =40;
    }
    res.send(`welcome ${name} with age of ${age}`);
});

app.listen(3000,()=>{
    console.log("running at port 3000");
});