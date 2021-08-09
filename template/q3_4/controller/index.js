const product = require("../model/product").Product;
const shop = require("../model/product").shop;


exports.addProduct = (req,res)=>{
    res.render("product",{path:"../view/product"});
}
exports.saveProduct = (req,res)=>{
 const set = new product(req.body.name,req.body.price,req.body.description,req.body.id);
    res.redirect(303,`/?name=${set.getName()}&price=${set.getPrice()}&description=${set.getdescription()}&id=${set.getId()} `);
}
exports.getAll = (req,res)=>{
    res.render("output", {path: "../view/output", name: req.query.name,
price:req.query.price,description:req.query.description,id:req.query.id});
}

exports.shoppingCart =(req,res)=>{
    res.render("shoppingCart",{content:shop()});
}