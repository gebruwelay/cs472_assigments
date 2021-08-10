
const product = require("../model/product").Product;
const shop = require("../model/product").shop;


exports.addProduct = (req,res)=>{
    res.render("product",{path:"../view/product"});
}
exports.saveProduct = (req,res)=>{
 let found = false;
 req.session.products.forEach(element => {
     if(element.name == req.body.name){
         element.price = parseFloat(element.price) + parseFloat(req.body.price);
         element.quantity = parseInt(element.quantity)+1;
         found = true;
     }
 });

 if(!found){
     req.session.products.push({"name": req.body.name, "price": req.body.price, "quantity":1});
 }
 const set = new product(req.body.name,req.body.price);
    res.redirect(303,`/cart`);
}
exports.getAll = (req,res)=>{
    res.render("output", {path: "../view/output", products: req.session.products});
}

exports.shoppingCart =(req,res)=>{
    res.render("shoppingCart",{content:req.session.products});
}