import { NextFunction, Request, RequestHandler, Response } from "express";


function execAsyncHandler(handler: Function): RequestHandler {
    return async  (req: Request, res: Response, next: NextFunction): Promise<void>=> {
        try {
            console.log('you tired');
            await handler(req, res, next)
        } catch (err) {
            console.log('higher order functions Error!');
            next(err)
        }
    }
}

module.exports = execAsyncHandler;