const DB = require('..');

const COLLECTION = 'products';

module.exports = class Product {
  constructor({price, ...product}) {
    this.product = {
      ...product,
      price: Number(price)
    };
  }

  static fetchAll() {
    return DB.connection
      .collection(COLLECTION)
      .find()
      .toArray()
      .catch(log);
  }

  static deleteOne(id, callback) {
    return DB.connection
      .collection(COLLECTION)
      .deleteOne({ _id: MongoObjectId(id) })
      .then(callback)
      .catch(log);
  }

  modify = (redirect) => {
    const { id, ...restInfo } = this.product;
    const operation = DB.connection.collection(COLLECTION);
    if (id) {
      operation
        .updateOne(
          { _id: MongoObjectId(id) },
          { $set: restInfo }
        )
        .then(redirect)
        .catch(log);
        ;
    } else {
      operation
        .insertOne(restInfo)
        .then(redirect)
        .catch(log);
    }
  }
};