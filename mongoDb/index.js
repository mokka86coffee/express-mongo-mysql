const { MongoClient } = require('mongodb');
const { MONGO_USER, MONGO_PASSWORD } = process.env;

const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@reactchat-ghelr.mongodb.net/test?retryWrites=true&w=majority`;

module.exports = {
  _connection: null,
  connect: function (callback) {
    MongoClient
      .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(client => {
        this._connection = client.db();
        callback();
      })
      .catch(log);
  },
  get connection () {
    if (!this._connection) throw new Error('No connection to database');
    return this._connection;
  }
};