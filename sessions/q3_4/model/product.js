const result = [];
class Product {
    constructor(name,price,description,id){
    this.name  = name;
    this.price = price;
    }

getName(){
    return this.name;
}
getPrice (){
    return this.price;
}

}
function getProduct(){
    result.push({name:"A",price:20,quantity: 400});
    result.push({name:"B",price:30,quantity: 500});
    result.push({name:"C",price:50,quantity: 600});
    result.push({name:"D",price:60,quantity: 700});
    result.push({name:"E",price:70,quantity: 800});
    return result;
}
module.exports= {
    Product: Product,
    shop:getProduct
}