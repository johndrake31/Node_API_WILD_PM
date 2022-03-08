const WilderModel = require('./../models/Wilder');
const wilderController = {}

wilderController.create = function (req, res, next) {
    const firstWilder = new WilderModel(req.body)
    firstWilder
        .save()
        .then((result) => { res.json({ success: true, result: result }); })
        .catch((err) => {
            // res.send(err.message)
            res.json({ success: false, result: err })
        })

}
wilderController.readAll = function (req, res, next) {
    WilderModel
        .find()
        .then((result) => { res.json({ success: true, result: result }); })
        .catch((err) => {
            // res.send(err.message)
            res.json({ success: false, result: err })
        })
}

wilderController.findById = function (req, res, next) {
    WilderModel
        .findOne({ _id: req.params.id })
        .then((result) => { res.json({ success: true, result: result }); })
        .catch((err) => {
            // res.send(err.message)
            res.json({ success: false, result: err })
        })
}

wilderController.update = function (req, res, next) {
    WilderModel
        .findOneAndUpdate({ _id: req.body._id }, req.body)
        .then((result) => { res.json({ success: true, result: result }); })
        .catch((err) => {
            // res.send(err.message)
            res.json({ success: false, result: err })
        })
}

wilderController.deleteById = function (req, res, next) {

    WilderModel
        .deleteOne({ _id: req.params.id }, req.body)
        .then((result) => { res.json({ success: true, result: result }); })
        .catch((err) => {
            // res.send(err.message)
            res.json({ success: false, result: err })
        })
}

module.exports = wilderController;