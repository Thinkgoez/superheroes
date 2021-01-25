const ObjectID = require('mongodb').ObjectID
const db = require('../db')

exports.get = (cb) => {
    db.get().collection('heroes').find().toArray((err, docs) => cb(err, docs))
}
exports.findById = (id, cb) => {
    db.get().collection('heroes').findOne({ _id: ObjectID(id) }, (err, doc) => {
        cb(err, doc)
    })
}
exports.create = (newHero, cb) => {
    db.get().collection('heroes').insertOne(newHero)
    cb(newHero)
}
exports.update = (id, newData) => {
    db.get().collection('heroes').updateOne(
        { _id: ObjectID(id) },
        { $set: newData }
    )
}
exports.delete = (id) => {
    db.get().collection('heroes').deleteOne({ _id: ObjectID(id) })
}