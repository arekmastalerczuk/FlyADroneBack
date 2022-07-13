import {Router} from 'express';
import {SpotRecord} from '../records/spot.record';

export const spotRouter = Router();

spotRouter
    .get('/search/:spotAddress?', async (req, res) => {
        const spots = await SpotRecord.getAll(req.params.spotAddress ?? '');
        res.json(spots);
    })

    .get('/:id', async (req, res) => {
        const spot = await SpotRecord.getOne(req.params.id);
        res.json(spot);
    })

    .post('/', async (req, res) => {
        const spot = new SpotRecord(req.body);
        await spot.insert();
        res.json(spot);
    });
