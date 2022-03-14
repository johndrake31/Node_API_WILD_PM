import express, {NextFunction, Request, Response} from 'express'
import mongoose from 'mongoose';
const app = express();
const wilders = require('./routes/wilders');
const home = require('./routes/home');

mongoose
    .connect("mongodb://127.0.0.1:27017/wilderdb", {
        autoIndex: true,
    })
    .then(() => console.log("Connected to database"))
    .catch((err: Error) => console.log(err));

app.use(express.json())
app.use((req: Request, res: Response, next:NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    next();
  });

//read


app.use('/', home);

app.use('/api/wilders', wilders);

//error handling
app.use(
    (err: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(500).json({ message: "Server Error" })
    })

app.use(
    (req: Request, res:Response, next:NextFunction) => {
        res.status(404).json({ message: "Route not found" })
    })

app.listen(4000, function () {
    console.log('Server started');
});