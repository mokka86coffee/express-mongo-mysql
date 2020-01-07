const express = require('express');
const router = express.Router();
const MongoDB = require('../../mongoDb');

const ProductPageRoute = ({ params }, res, next) =>
  MongoDB.connection
    .collection('products')
    .find({ _id: MongoObjectId(params.id) })
    .next()
    .then(product => res.render('product', { product, pageTitle: 'Product' }))
    .catch(log);

router
  .route('/:id')
  .get(ProductPageRoute);

module.exports = router;