const DB = require('..');

const COLLECTION = 'users';

module.exports = class User {
  constructor(user) {
    this.user = user;
  }

  static fetchAll(redirect) {
    return DB.connection
      .collection(COLLECTION)
      .find()
      .toArray()
      .then(redirect)
      .catch(log);
  }

  static findOne(id) {
    return DB.connection
      .collection(COLLECTION)
      .findOne({_id: MongoObjectId(id)});
  }

  static deleteOne(id, redirect) {
    DB.connection
      .collection(COLLECTION)
      .deleteOne({ _id: MongoObjectId(id) })
      .then(redirect)
      .catch(log);
  }

  save = (redirect) => {
    const operation = DB.connection.collection(COLLECTION);
    const { id, ...user } = this.user;

    if (id) {
      return operation
        .updateOne({ _id: MongoObjectId(id) }, {$set: user})
        .then(redirect)
        .catch(log);
    }

    return operation
      .insertOne(user)
        .then(redirect)
        .catch(log);
  }
};