import express, {NextFunction, Request, Response} from 'express'
import mongoose from 'mongoose';
const app = express();
import cors from 'cors';
import wilders from './routes/wilders';
import home from './routes/home';


mongoose
    .connect("mongodb://127.0.0.1:27017/wilderdb", {
        autoIndex: true,
    })
    .then(() => console.log("Connected to database"))
    .catch((err: Error) => console.log(err));

app.use(express.json())
app.use(cors());

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
    console.log('Server started at port 4000');
});