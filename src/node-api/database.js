const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://root:LetsGetDigi123@159.69.180.8:27017';
const dbName = 'test';
const client = new MongoClient(url, { useNewUrlParser: true });

client.connect(function (err) {
  if (err) {
    console.error('Failed to connect to MongoDB database', err);
    return;
  }
  console.log('Connected successfully to MongoDB database');
});

const db = client.db(dbName);
const Users = db.collection('Users');
const Data = db.collection('Data');
module.exports = {
    Users,
    Data
};