import {v4 as uuid} from 'uuid';
import {FieldPacket} from 'mysql2';
import {NewSpotEntity, SimpleSpotEntity, SpotEntity} from '../types';
import {ValidationError} from '../utils/errors';
import {pool} from '../utils/db';

type SpotRecordResults = [SpotEntity[], FieldPacket[]];

export class SpotRecord implements SpotEntity {
    public id: string;

    public name: string;

    public description: string;

    public image: string;

    public latitude: number;

    public longitude: number;

    public siteUrl: string;

    public facebookUrl: string;

    public youtubeUrl: string;

    public instagramUrl: string;

    public spotAddress: string;

    constructor(obj: NewSpotEntity) {
        const {
            // eslint-disable-next-line max-len
            id,
            name,
            description,
            image,
            latitude,
            longitude,
            siteUrl,
            facebookUrl,
            youtubeUrl,
            instagramUrl,
            spotAddress,
        } = obj;
        if (!name || name.length > 100) {
            throw new ValidationError('Nazwa miejscówki nie może być pusta, albo dłuższa niż 100 znaków.');
        }

        if (description && description.length > 1000) {
            throw new ValidationError('Opis miejscówki nie może przekraczać 1000 znaków.');
        }

        if (spotAddress && spotAddress.length > 150) {
            throw new ValidationError('Adres miejscówki nie może przekraczać 150 znaków.');
        }
        // @TODO check if url is valid

        // eslint-disable-next-line max-len
        if ((siteUrl && siteUrl.length) > 100 || (facebookUrl && facebookUrl.length) > 100 || (youtubeUrl && youtubeUrl.length) > 100 || (instagramUrl && instagramUrl.length) > 100) {
            throw new ValidationError('Link do strony www lub social media użytkownika nie może być dłuższy niż 100 znaków.');
        }

        if ((typeof latitude !== 'number') || (typeof longitude !== 'number')) {
            throw new ValidationError('Nie można zlokalizować miejscówki.');
        }

        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.latitude = latitude;
        this.longitude = longitude;
        this.siteUrl = siteUrl;
        this.facebookUrl = facebookUrl;
        this.youtubeUrl = youtubeUrl;
        this.instagramUrl = instagramUrl;
        this.spotAddress = spotAddress;
    }

    static async getOne(id: string): Promise<SpotRecord | null> {
        const [results] = await pool.execute('SELECT * FROM `spots` WHERE `id` = :id', {
            id,
        }) as SpotRecordResults;

        return results.length === 0 ? null : new SpotRecord(results[0]);
    }

    static async getAll(name: string): Promise<SimpleSpotEntity[]> {
        const filteredName = name.replace(/[^a-zA-Z0-9 ęóąśłżźćń]/g, '');
        const [results] = await pool.execute('SELECT * FROM `spots` WHERE `spotAddress` LIKE :search', {
            search: `%${filteredName}%`,
        }) as SpotRecordResults;

        return results.map((result) => {
            const {id, latitude, longitude} = result;

            return {
                id, latitude, longitude,
            };
        });
    }

    async insert(): Promise<void> {
        if (!this.id) {
            this.id = uuid();
        } else {
            throw new Error('Cannot insert something that is already inserted.');
        }
        const filteredSpotAddress = this.spotAddress.replace(/[^a-zA-Z0-9 ęóąśłżźćń]/g, '');

        await pool.execute('INSERT INTO `spots`(`id`, `name`, `description`, `image`, `latitude`, `longitude`,  `siteUrl`, `facebookUrl`, `youtubeUrl`, `instagramUrl`, `spotAddress`) VALUES(:id, :name, :description, :image, :latitude, :longitude, :siteUrl, :facebookUrl, :youtubeUrl, :instagramUrl, :spotAddress)', {
            ...this,
            spotAddress: filteredSpotAddress,
        });
    }
}
