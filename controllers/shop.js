const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll().then(([rows,fieldData]) => {
    res.render('shop/product-list', {
      prods: rows,
      pageTitle: 'All Products',
      path: '/products'
    })
  })
    
};

exports.getProduct= (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId).then(([product])=>{
    res.render('shop/product-detail', {
      prods: product,
      pageTitle: product.title,
      path: '/products'

  })
  .catch((err)=>{
    console.log(err);
  })
})
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll().then(([rows,fieldData]) => {
    res.render('shop/index', {
      prods: rows,
      pageTitle: 'Shop',
      path: '/'
    })
  })
  .catch((err) => {
    console.error(err);
  })
}

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart=(req, res, next) => {
  const prodId= req.body.productId;
  res.redirect('/cart');
}

exports.deleteProduct=(req, res, next) => {
  const prodId= req.body.productId;
  Product.deleteById(prodId).then(() => {

  })
  .catch(err => {
    console.error(err);
  })
  
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
