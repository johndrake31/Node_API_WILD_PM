import { Router, NextFunction,Request, Response } from "express";
import  execAsyncHandler from '../middleware/execAsyncHandler';
const router = Router();

router.get('/', execAsyncHandler(function (req: Request, res: Response, next: NextFunction) {
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
}))

export default router;