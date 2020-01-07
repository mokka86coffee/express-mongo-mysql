const DB = require('..');

const COLLECTION = 'products';

module.exports = class Product {
  constructor({price, ...product}) {
    this.product = {
      ...product,
      price: Number(price)
    };
  }

  static getAll() {
    return DB.connection
      .collection(COLLECTION)
      .find()
      .toArray()
      .catch(log);
  }

  modify = (callback) => {
    const { id } = this.product;
    const operation = DB.connection.collection(COLLECTION);
    if (id) {
      operation
        .updateOne(
          { _id: MongoObjectId(id) },
          { $set: this.product }
        )
        .then(callback)
        .catch(log);
        ;
    } else {
      operation
        .insertOne(this.product)
        .then(callback)
        .catch(log);
    }
  }
};