require('dotenv').config();
require('./globals');
const { app, startOn } = require('./config');
const { UsersRoute, MainRoute } = require('./routes');
const { ProductsRoute, ProductRoute } = require('./routes/mongo');
const { sequelize: DBConnection } = require('./db');
const MongoDB = require('./mongoDb');

app
  .use('/', MainRoute)
  .use('/products', ProductsRoute)
  .use('/product', ProductRoute);
  // .use('/users', UsersRoute);

// MySQL connection
// DBConnection.sync().then(startOn).catch(log);
// MongoDB connection
MongoDB.connect(startOn);