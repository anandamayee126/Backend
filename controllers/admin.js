const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product'
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title,price,description,imageUrl);
  product.save()
    .then(() => {
    res.redirect('/');
    })
    .catch(err => {
    console.log(err);
  })
};

exports.getEditProduct = (req, res,next) => {
  const edit=req.query.edit;
  if(!endMode){
    return (res.redirect('/'))
  }
  res.render('admin/edit-product', {
    
    pageTitle: 'Add/Edit Products',
    path: '/admin/edit-product'
  });

}

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};
