import { NextFunction, Request, Response } from "express";
function execAsyncHandler(handler: any){
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            await handler(req, res, next)
        } catch (err) {
            console.log('higher order functions are cool!');
            next(err)
        }
    }
}

module.exports = execAsyncHandler;