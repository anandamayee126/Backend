const express= require('express');

const routes= express.Router();
const bodyParser= require('body-parser');

routes.use(bodyParser.urlencoded({ extended: false }));
routes.get('/add-product',(req, res, next) =>
{
    res.send(`<form action="/admin/product" method="POST"><input type=text name="product" value="product-name"><input type=text name="size" value="size"><button type="submit">Add Product</button></form>`);
})

routes.post('/product',(req, res, next) =>{
    console.log(req.body);
    res.redirect('/');
})

routes.use((req, res, next) =>{
    res.status(404).send(`<h1>PAGE NOT FOUND</h1>`);
})

module.exports=routes;