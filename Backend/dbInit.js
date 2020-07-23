/***************************************************************************
 *                              Initialize MongoDB                         *
 ***************************************************************************/

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const userName = process.env.MONGODB_USER_NAME; //'dev';
const password = process.env.MONGODB_PASSWORD; //'123456';
const dbName = process.env.MONGODB_NAME; //'admin';
const dbServer = process.env.MONGODB_SERVER; //'localhost:27017';

const MONGODB_URL =
    `mongodb://${userName}:${password}@${dbServer}/${dbName}?retryWrites=true`;
let _db;


const initDb = callback => {

    if (_db) {
        console.log('Database is already initialize! ');
        return callback(null, _db);
    }

    MongoClient.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(client => {
            _db = client.db('accountsDB');
            callback(null, _db);
        }).catch(error => {
            callback(error);
        })
};

const getDb = () => {
    if (!_db) {
        throw Error('Database Not initialized run initDb first!')
    }
    return _db;
};

module.exports = {
    initDb,
    getDb
};