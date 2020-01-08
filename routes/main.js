const express = require('express');
const router = express.Router();
const renderMiddleware = require('../views/renderMiddleware');

const MainPage = renderMiddleware('main', { pageTitle: 'Main' });

router
  .route('/')
  .get(MainPage);

module.exports = router;