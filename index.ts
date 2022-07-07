import express, {json} from 'express';
import 'express-async-errors';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import {handleError} from './utils/errors';

const app = express();

app.use(cors({
    origin: 'https://localhost:3000',
}));
app.use(json());
app.use(rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 5 minutes)
}));
app.use(handleError);

app.listen(3001, 'localhost', () => {
    console.log('Listening on port http://localhost:3001');
});
