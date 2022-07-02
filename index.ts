import express, {json} from 'express';
import 'express-async-errors';
import cors from 'cors';
import {handleError} from './utils/errors';

const app = express();

app.use(cors({
    origin: 'https://localhost:3000',
}));

app.use(json());

app.use(handleError);

app.listen(3001, 'localhost', () => {
    console.log('Listening on port http://localhost:3001');
});
