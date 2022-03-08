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

app.get('/api/wilder/findall', wilderController.readAll)
app.post('/api/wilder/findbyname', wilderController.findByName)
app.post('/api/wilder/create', wilderController.create)
app.put('/api/wilder/updatebyid', wilderController.update)
app.delete('/api/wilder/deletebyname', wilderController.deleteByName)

app.listen(4000, function () {
    console.log('Server started');
});