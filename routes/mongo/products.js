const express = require('express');
const router = express.Router();
const { Product } = require('../../mongoDb/models');

const ProductsPageRoute = async (req, res, next) => {
  const products = await Product.getAll();
  res.render('products', { pageTitle: 'Products', products });
};

const ModifyProductRoute = (req, res, next) => {
  const product = new Product(req.body);
  product.modify(_ => res.redirect('/products'))
};

router
  .route('/')
  .get(ProductsPageRoute)
  .post(ModifyProductRoute);

module.exports = router;