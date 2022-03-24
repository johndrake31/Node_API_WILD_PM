import { NextFunction, Request, Response } from "express";
import { IWilderCreate, IWilder } from "../Interfaces/IWilder";
const WilderModel = require('./../models/Wilder');


const wilderController = {


    create: async (req: Request, res: Response<IWilderCreate>, next: NextFunction) => {
        await WilderModel.init()
        const newWilder = new WilderModel(req.body)
        const result = await newWilder.save();
        res.json(result);
    },

    readAll: async (req: Request, res: Response,next: NextFunction ): Promise<void> => {
        console.log('find all Wilders');
        const wilders = await WilderModel.find({});
        res.json(wilders);
    },

    findById: async function (req: Request, res: Response, next: NextFunction) {
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
    },

    updateById: async function (req: Request, res: Response, next: NextFunction) {
        const wilder = await WilderModel.findOneAndUpdate({ _id: req.params.id }, req.body)
        res.send(wilder);
    },

    deleteById: async function (req: Request, res: Response, next: NextFunction) {
        const wilder = await WilderModel.deleteOne({ _id: req.params.id }, req.body)
        res.send(wilder)
    },
}
export default wilderController;