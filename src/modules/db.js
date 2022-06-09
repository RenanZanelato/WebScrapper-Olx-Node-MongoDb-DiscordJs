const { mongoUriConnection } = require('./../configs/config.json');

const mongoClient = require("mongodb").MongoClient;
mongoClient.connect(mongoUriConnection)
            .then(conn => global.conn = conn.db("ScrapperDb"))
            .catch(err => console.log(err))

function insert(olxId) {
    return global.conn.collection("ScrapperCollection").insertOne({olxId: olxId});
}

function findOne(olxId) {
    return global.conn.collection("ScrapperCollection").findOne({ olxId: olxId });
}
 
module.exports = { insert, findOne}