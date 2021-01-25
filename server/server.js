const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID
const database = require('./db')
const heroesContoroller = require('./controllers/heroes')
const app = express();

app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


app.get('/heroes', heroesContoroller.get)

app.post('/hero', heroesContoroller.create)
app.get('/hero/:id', heroesContoroller.findById)
app.put('/hero/:id', heroesContoroller.update)
app.delete('/hero/:id', heroesContoroller.delete)

app.delete('/hero/images/:id', (req, res) => {
    database.get().collection('heroes').findOne({ _id: ObjectID(req.params.id) }, (err, doc) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        }
        doc.images = doc.images.filter(img => !req.body.includes(img))
        database.get().collection('heroes').updateOne({ _id: ObjectID(req.params.id) }, { $set: { images: doc.images } });
        res.sendStatus(200)
    })
})
app.put('/hero/images/:id', (req, res) => {
    try {
        database.get().collection('heroes').updateOne({ _id: ObjectID(req.params.id) },
            { $addToSet: { images: req.body.image } }
        )
        res.sendStatus(200)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

database.connect("mongodb://localhost:27017/heroes_app", function (err) {
    if (err) return console.log(err);
    app.listen(3001, function () {
        console.log('started')
    })
})