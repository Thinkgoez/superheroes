const MongoClient = require('mongodb').MongoClient;

const state = {
    db: null
}

exports.connect = (url, done) => {
    if (state.db) {
        return done()
    }

    MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, client) => {
        if (err) return console.log(err);
        state.db = client.db()
        done()
    })
}

exports.get = () => state.db