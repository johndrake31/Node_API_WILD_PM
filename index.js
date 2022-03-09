const express = require('express');
const mongoose = require('mongoose');
const app = express();
const wilders = require('./routes/wilders');
const home = require('./routes/home');

mongoose
    .connect("mongodb://127.0.0.1:27017/wilderdb", {
        autoIndex: true,
    })
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err));

app.use(express.json())


//read


app.use('/', home);

app.use('/api/wilders', wilders);

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