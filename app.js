require('dotenv').config();
require('./globals');
const { app, startOn } = require('./config');
const { MainRoute } = require('./routes');
const { ProductsRoute, ProductRoute, UsersRoute } = require('./routes/mongo');
// const { sequelize: DBConnection } = require('./db');
const MongoDB = require('./mongoDb');

// для теста
const { User } = require('./mongoDb/models');
const authMiddleware = (req, res, next) => {
  User
    .findOne('5e152f60b3e82e4be71b3d9f')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(log);
};
// для теста

app
  .use(authMiddleware) // для теста
  .use('/', MainRoute)
  .use('/products', ProductsRoute)
  .use('/product', ProductRoute)
  .use('/users', UsersRoute);

// MySQL connection
// DBConnection.sync().then(startOn).catch(log);
// MongoDB connection
MongoDB.connect(startOn);