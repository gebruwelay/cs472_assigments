const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({extended:false}));
app.use("/js",express.static(path.join(__dirname,"view")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"view"));


let list = [ "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
"Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
"Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
"My reply is no", "My sources say no", "Outlook not so good", "Very doubtful" ];
app.get("/",(req,res)=>{
    res.render("form");
});
app.get("/8ball", (req,res)=>{
    res.locals.answer =list[Math.floor(Math.random()*list.length-1)];
    console.log(res.locals.answer);
    res.send(res.locals.answer);
});


app.listen(10000);
