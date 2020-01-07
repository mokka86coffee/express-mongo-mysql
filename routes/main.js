const express = require('express');
const router = express.Router();
const renderMiddleware = require('../views/renderMiddleware');

const MainPage = renderMiddleware('main', { pageTitle: 'Add user' });

router
  .route('/')
  .get(MainPage);

module.exports = router;