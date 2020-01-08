const express = require('express');
const router = express.Router();
const { Product } = require('../../mongoDb/models');

const ProductsPageRoute = async (req, res, next) => {
  const products = await Product.fetchAll();
  res.render('products', { pageTitle: 'Products', products });
};

const ModifyProductRoute = (req, res, next) => {
  const { method, ...product } = req.body;
  switch (method) {
    case 'delete':
      Product.deleteOne(product.id, _ => res.redirect('/products'));
      break;
    default:
      new Product(req.body).modify(_ => res.redirect('/products'));
  }
  
};

router
  .route('/')
  .get(ProductsPageRoute)
  .post(ModifyProductRoute);

module.exports = router;