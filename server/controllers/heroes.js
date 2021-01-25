const Heroes = require('../models/heroes')

exports.get = (req, res) => {
    Heroes.get((err, docs) => {
        if (err) {
            console.log(err);
            return res.sendStaus(500)
        }
        if(!req.query.page || !req.query.count  ) return res.send(docs)
        const page = (req.query.page * req.query.count)
        res.send({ heroes: docs.slice(page - req.query.count, page), totalCount: docs.length })
    })
}
exports.findById = (req, res) => {
    Heroes.findById(req.params.id, (err, docs) => {
        if (err) {
            console.log(err);
            return res.sendStaus(500)
        }
        res.send(docs)
    })
}
exports.create = (req, res) => {
    try {
        Heroes.create(req.body, (hero) => {
            res.send(hero)
        })
    } catch (err){
        console.log(err)
        res.sendStatus(500)
    }
}
exports.update = (req, res) => {
    try {
        Heroes.update(req.params.id, req.body)
        res.sendStatus(200)
    } catch (err){
        console.log(err)
        res.sendStatus(500)
    }
}
exports.delete = (req, res) => {
    // console.log();
    try {
        Heroes.delete(req.params.id)
        res.sendStatus(200)
    } catch (err){
        console.log(err)
        res.sendStatus(500)
    }
}