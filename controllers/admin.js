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
  const userID= req.user.id;
  req.user.create({
  title: title,
  imageUrl: imageUrl,
  price: price,
  description: description
 })
 .then((result)=>{
   console.log('product created');
   res.redirect('/admin/products');
 })
 .catch((err)=>{
  console.log('error creating product');
 })
}

exports.getEditProduct = (req, res,next) => {
  const edit=req.query.edit;
  if(!edit){
    return (res.redirect('/'))
  }
  const prodId=req.params.id;
  req.user
   .getProducts({where: {id: prodId}})
   .then((products)=>{
    const product = products;
    if(!product)
    {
      return (res.redirect('/'));
    }
   })
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
