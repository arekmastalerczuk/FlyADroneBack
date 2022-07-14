import {Request, Router} from 'express';
import multer from 'multer';
import {SpotRecord} from '../records/spot.record';

export const spotRouter = Router();

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const fileFilter = (req: Request, file: any, cb: any) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: fileStorageEngine,
    limits: {
        fileSize: 1024 * 1024 * 10, // limit 10MB
    },
    fileFilter,
});

spotRouter
    .get('/search/:spotAddress?', async (req, res) => {
        const spots = await SpotRecord.getAll(req.params.spotAddress ?? '');
        res.json(spots);
    })

    .get('/:id', async (req, res) => {
        const spot = await SpotRecord.getOne(req.params.id);
        res.json(spot);
    })

    // .post('/', async (req, res) => {
    //     const spot = new SpotRecord(req.body);
    //     await spot.insert();
    //     res.json(spot);
    // });

    .post('/', upload.single('image'), async (req, res, next) => {
        // console.log(req.file);
        const spot = new SpotRecord(req.body);
        await spot.insert();
        res.json(spot);
    });
