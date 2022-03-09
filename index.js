const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const WilderModel = require('./models/Wilder');
const wilderController = require('./controllers/wilders');

const app = express();
mongoose
    .connect("mongodb://127.0.0.1:27017/wilderdb", {
        autoIndex: true,
    })
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err));
app.use(express.json())

//read

app.get('/', function (req, res, next) {
    res.send(
        `
            <div width="400" height="400" style='padding: 25px; background-color: black'>
                <h1 style="color:red">THIS IS AN API</h1>
                <h2 style="color:white">Quelle est la couleur préférée d’un chat?</h2>
                <hr>
                <h3 style="color:white">Le rrrrrouge.</h3>
                <br>
                <br>
                <br>
            <div>
        `
    )
})
app.get('/api/wilders', wilderController.readAll)
app.get('/api/wilders/:id', wilderController.findById)

//create
app.post('/api/wilders', wilderController.create)

//update
app.put('/api/wilders/:id', wilderController.updateById)

//delete
app.delete('/api/wilders/:id', wilderController.deleteById)

app.use(
    (req, res, next) => {
        res.status(404).json({ message: "Route not found" })
    })

app.listen(4000, function () {
    console.log('Server started');
});