const express = require('express');
const mongoose = require('mongoose');
const app = express();
const wilders = require('./routes/wilders');

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
                <h2 style="color:white">"Ecoute", dit la maman à sa petite fille,”si tu es sage, tu iras au ciel,et si tu n’es pas sage, tu iras en enfer."</h2>
                <hr>
                <h3 style="color:white">"Et qu’est-ce que je dois faire pour aller au cirque?"</h3>
                <br>
                <br>
                <br>
            <div>
        `
    )
})

app.use('api/wilders', wilders);

//error handling
app.use(
    (err, req, res, next) => {
        res.status(500).json({ message: "Server Error" })
    })

app.use(
    (req, res, next) => {
        res.status(404).json({ message: "Route not found" })
    })

app.listen(4000, function () {
    console.log('Server started');
});