const Sequelize = require('sequelize');

const {
  DB_PORT,
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASSWORD
} = process.env;

const {
  UsersModel
} = require('./models');

const sequelize = new Sequelize(`mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`);

const Users = sequelize.define(...UsersModel);

module.exports = {
  sequelize,
  Users
};


// Just in case *another way
{
// const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
//   host: DB_HOST,
//   port: DB_PORT,
//   dialect: 'mysql'
// });
}