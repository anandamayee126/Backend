const express = require('express');
const app= express();
const port=5000;
const bodyParser= require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/add-product',(req, res, next) =>{
    res.send(`<form action="/product" method="POST"><input type=text name="product" value="product-name"><input type=text name="size" value="size"><button type="submit">Add Product</button></form>`);
})

app.use('/product',(req, res, next) =>{
    console.log(req.body);
    res.redirect('/');
})
app.use('/',(req, res, next) =>{
    res.send(`<h1>HELLO FROM ANDY</h1>`);
})

// app.use((req, res, next) =>{
//     console.log('2nd middleware');
//     res.send('<h1>Hello from Express</h1>')
// })

app.listen(port,() =>{
  console.log(`listening on port ${port}`);
})