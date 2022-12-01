const MongoClient = require('mongodb').MongoClient;
const url         = `mongodb+srv://admin:MIT2022nov@badbank.qenxlaq.mongodb.net/?retryWrites=true&w=majority`;
let db            = null;

// connect to mongo
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client){
    console.log('Connected successfully to db server');
    const dbName = 'capstonebank';
    // connect to myproject database
    db = client.db(dbName);
});

// create user account
function create(name, email, password){
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const doc = {name, email, password, balance: 10};
        collection.insertOne(doc, {w:1}, function(err, result) {
            err? reject(err) : resolve(doc);
        });
    }); 
};

// find user account
function find(email){
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .find({email: email})
            .toArray(function(err, docs) {
                err? reject(err):resolve(docs);
        })
    })
};

// find user account
function findOne(email) {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .findOne({ email: email })
            .then((doc) => resolve(doc))
            .catch((err) => reject(err));
    })
};

// update - deposit/withdraw amount
function update(email, amount) {
    // console.log('inside dal...amount:', amount)
    const amountNum = Number(amount);
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .findOneAndUpdate(
                { email: email },
                { $inc: {balance: amountNum} },
                { returnOriginal: false },
                function (err, documents) {
                    err ? reject(err) : resolve(documents);
                }
            );
    });
}

// all users
function all(){
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .find({})
            .toArray(function(err, docs) {
                err? reject(err):resolve(docs);
        })
    })
}

// update

function updateAll() {
    return new Promise((resolve, reject) => {
        const customers = db.collection('users')
        .updateAll(
            {},
            {$set: {message: "none"}},
            function(err, docs) {
                err? reject(err):resolve(docs);
            }
        )
    })
}

// Transfer

function transfer(email, amount, message) {
    // console.log('inside dal...amount:', amount)
    const amountNum = Number(amount);
    return new Promise((resolve, reject) => {
        const customers = db.collection('users')
            .findOneAndUpdate(
                { email: email },
                { $inc: {balance: amountNum} },
                { $set: {message: message} },
                {upsert:false,
                    multi:false},
                { returnOriginal: false },
                function (err, documents) {
                    err ? reject(err) : resolve(documents);
                }
            );
    });
}

module.exports = {create, find, findOne, update, all, transfer, updateAll};