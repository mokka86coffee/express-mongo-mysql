const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

const startOn = (port = 8000) => {
  app.listen(port);
  log('Server running on port:', port);
};

module.exports = { app, startOn };