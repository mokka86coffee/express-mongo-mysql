const express = require('express');
const router = express.Router();
const { User } = require('../../mongoDb/models');

const UsersPageRoute = (req, res, next) => {
  User.fetchAll(users => res.render('users', { users, pageTitle: 'Users' }));
};

const ModifyUserRoute = (req, res, next) => {
  const { method, ...user } = req.body;
  const redirect = () => res.redirect('/users');
  switch(method) {
    case 'delete': User.deleteOne(user.id, redirect); break;
    default: new User(user).save(redirect);
  }
};

router
  .route('/')
  .get(UsersPageRoute)
  .post(ModifyUserRoute);

module.exports = router;