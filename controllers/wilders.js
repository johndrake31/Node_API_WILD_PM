const WilderModel = require('./../models/Wilder');
const wilderController = {}

wilderController.create = async function (req, res, next) {
    await WilderModel.init()
    const newWilder = new WilderModel(req.body)
    const result = await newWilder.save();
    res.json(result);
}

wilderController.readAll = async function (req, res, next) {
    const wilder = await WilderModel.find();
    res.send(wilder);
}

wilderController.findById = async function (req, res, next) {
    const wilder = await WilderModel.findOne({ _id: req.params.id });
    res.send(wilder);
    //CODE BEFORE
    // WilderModel
    //     .findOne({ _id: req.params.id })
    //     .then((result) => { res.json({ success: true, result: result }); })
    //     .catch((err) => {
    //         // res.send(err.message)
    //         next(err)
    //     })
}

wilderController.updateById = async function (req, res, next) {
    const wilder = await WilderModel.findOneAndUpdate({ _id: req.params.id }, req.body)
    res.send(wilder);
}

wilderController.deleteById = async function (req, res, next) {
    const wilder = await WilderModel.deleteOne({ _id: req.params.id }, req.body)
    res.send(wilder)
}

module.exports = wilderController;