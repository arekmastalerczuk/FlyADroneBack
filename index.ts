import express, {json, Router} from 'express';
import 'express-async-errors';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import {handleError} from './utils/errors';
import {spotRouter} from './routers/spot.router';
import {config} from './config/config';

const app = express();

app.use(cors({
    origin: config.corsOrigin,
}));
app.use(json());
app.use(rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 5 minutes)
}));

// change for online deployment: app.use('/spot', spotRouter) ==> router.use(('/spot', spotRouter);
app.use('/spot', spotRouter);
// const router = Router();
// router.use('/spot', spotRouter);
// app.use('/apidrone', router); // because url: /apidrone is the main app url online for backend

app.use(handleError);

app.listen(3001, 'localhost', () => {
    console.log('Listening on port http://localhost:3001');
});
