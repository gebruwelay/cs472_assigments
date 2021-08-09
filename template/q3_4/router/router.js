const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({extended:false}));
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"../","view"));
const controller = require("../controller/index");
app.use(express.json())
app.get("/form",controller.addProduct);
app.post("/addToCart", controller.saveProduct);
app.get("/", controller.getAll);
app.get("/shopcart",controller.shoppingCart)

app.listen(3003,()=>{
    console.log("running at port 3003");
})