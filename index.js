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
app.get('/', function(req,res,next){
    res.send(
        '<h1 style="color:red">THIS IS AN API</h1>'
    )
})
app.get('/api/wilder/findall', wilderController.readAll)
app.get('/api/wilder/findbyid/:id', wilderController.findById)

//create
app.post('/api/wilder/create', wilderController.create)

//update
app.put('/api/wilder/updatebyid', wilderController.update)

//delete
app.delete('/api/wilder/deletebyid/:id', wilderController.deleteById)

app.listen(4000, function () {
    console.log('Server started');
});