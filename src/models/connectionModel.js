require('dotenv').config();
const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const DB_NAME = 'ebytr-tasks';
const MONGO_DB_URL = process.env.HOST || 'mongodb:27017/ebytr-tasks';
let db = null;

module.exports = () => (
  db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
      .then((connect) => {
        db = connect.db(`${DB_NAME}`);
        return db;
}));
