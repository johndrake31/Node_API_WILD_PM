const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const WilderModel = require('./models/Wilder')

const app = express();
app.use(express.json())


mongoose
    .connect("mongodb://127.0.0.1:27017/wilderdb", {
        autoIndex: true,
    })
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err));

app.get('/', (req, res, next) => {
    console.log('called');
    res.send('<h1>Hello World</h1>')
})

app.use('/wilder', function (req, res, next) {
    console.log(req.body);

    const firstWilder = new WilderModel({
        name: req.body.name,
        city: req.body.city,
        skills: req.body.skills,
    })
    firstWilder
        .save()
        .then(result => res.send(result))
        .catch(err => console.log('error:', err))
})

app.listen(4000, function () {
    console.log('Server started');
});