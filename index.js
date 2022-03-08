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
app.get('/api/wilder/users', wilderController.readAll)
app.get('/api/wilder/user/:id', wilderController.findById)

//create
app.post('/api/wilder/user', wilderController.create)

//update
app.put('/api/wilder/user-update/:id', wilderController.update)

//delete
app.delete('/api/wilder/user-delete/:id', wilderController.deleteById)

app.listen(4000, function () {
    console.log('Server started');
});