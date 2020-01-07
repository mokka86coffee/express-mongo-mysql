const Sequelize = require('sequelize');

const UsersModel = [
  'users',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: Sequelize.CHAR,
    amount: {
      type: Sequelize.DOUBLE,
      allowNull: false
    }
  }
];

module.exports = UsersModel;