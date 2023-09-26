const Model= require('../models/product')
const adminData = require('./admin');
const fs= require('fs');

exports.getAddProduct=(req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    })};


exports.postAddProduct=(req, res, next) => {
    const add_product = new Model(req.body.title);
    add_product.save();
    res.redirect('/')};


exports.getProduct=(req, res, next) => {
    const get_product = Model.fetchAll();
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: get_product.length > 0,
      activeShop: true,
      productCSS: true
    })};


exports.writeFile=fs.writeFile('product.txt',products,(err,data)=>{
    if(err){
        console.log("sorry no products added");
    }
    else{
        console.log(data);
    }
})