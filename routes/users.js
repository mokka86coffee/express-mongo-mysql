const express = require('express');
const router = express.Router();
const { Users } = require('../db');

const UsersPageRoute = (req, res, next) => {
  Users
    .findAll()
    .then(data => {
      const users = data.map(element => element.dataValues);
      res.render('users', { pageTitle: 'Users', users });
    })
    .catch(log);
};

const ModifyUsersRoute = async (req, res, next) => {
  switch (req.body.method) {
    case 'post': await AddUserRoute(req, res, next); break;
    case 'put': await EditUserRoute(req, res, next); break;
    case 'delete': await DeleteUserRoute(req, res, next); break;
    default: res.end('Server error. Please reload the page');
  }
}

const AddUserRoute = (req, res, next) => (
  Users
    .create({
      name: req.body.username,
      amount: (Math.random() * 1000).toFixed(2)
    })
    .then(_ => res.redirect('/users'))
    .catch(log)
);

const EditUserRoute = (req, res, next) => (
  Users
    .findByPk(req.body.id)
    .then(user => {
      user.name = user.name + (Math.random() * 100).toFixed();
      user.amount = (Math.random() * 1000).toFixed(2);
      user.save();
      res.redirect('/users');
    })
    .catch(log)
);

const DeleteUserRoute = (req, res, next) => (
  Users
    .findByPk(req.body.id)
    .then(user => user.destroy())
    .then(_ => res.redirect('/users'))
    .catch(log)
);

router
  .route('/')
  .get(UsersPageRoute)
  .post(ModifyUsersRoute);

module.exports = router;