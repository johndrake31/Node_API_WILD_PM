function execAsyncHandler(handler){
    return async function (req, res, next) {
        try {
            await handler(req, res, next)
        } catch (err) {
            console.log('higher order functions are cool!');
            next(err)
        }
    }
}

module.exports = execAsyncHandler;