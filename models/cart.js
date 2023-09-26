const fs= require('fs');
const path= require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );
  
module.exports= class Cart{
    static addProduct(id){
    fs.readFile(p,(err,cartContent) => {
        let cart={products:[],totalPrice:0};
        if(!err){
            cart= JSON.parse(cartContent);
        }
        const existingCart = cart.products.find(product => prod.id===id);
        let updateProduct;
        if(existingCart){
            updateProduct = {...existingCart};
            updateProduct.qty=updateProduct.qty+1;
        }
        else{
            updateProduct = {id:id,qty:1};
        }
        cart.totalPrice=cart.totalPrice+productPrice;
    })

    }
}