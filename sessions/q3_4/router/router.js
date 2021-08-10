const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");

app.use(express.urlencoded({extended:false}));
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"../","view"));
const controller = require("../controller/index");
app.use(express.json())
app.use(session({secret:"salt",saveUninitialized:false, resave:false}));
app.use((req,res,next)=>{
    if(!req.session.products){
         req.session.products = [];
    }
    next();
});

app.get("/form",controller.addProduct);
app.post("/addToCart", controller.saveProduct);
app.get("/cart", controller.getAll);
app.get("/shopcart",controller.shoppingCart)

app.listen(3003,()=>{
    console.log("running at port 3003");
})