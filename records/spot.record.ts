import {v4 as uuid} from 'uuid';
import {SpotEntity} from '../types';
import {ValidationError} from '../utils/errors';

interface NewSpotEntity extends Omit<SpotEntity, 'id'> {
    id?: string;
}

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

    constructor(obj: NewSpotEntity) {
        const {
            // eslint-disable-next-line max-len
            id, name, description, image, latitude, longitude, siteUrl, facebookUrl, youtubeUrl, instagramUrl,
        } = obj;

        if (!name || name.length > 100) {
            throw new ValidationError('Nazwa miejscówki nie może być pusta, albo dłuższa niż 100 znaków.');
        }

        if (description.length > 1000) {
            throw new ValidationError('Opis miejscówki nie może przekraczać 1000 znaków.');
        }

        // @TODO check if url is valid

        // eslint-disable-next-line max-len
        if ((siteUrl.length) > 100 || (facebookUrl.length) > 100 || (youtubeUrl.length) > 100 || (instagramUrl.length) > 100) {
            throw new ValidationError('Link do strony www lub social media użytkownika nie może być dłuższy niż 100 znaków.');
        }

        if ((typeof latitude !== 'number') || (typeof longitude !== 'number')) {
            throw new ValidationError('Nie można zlokalizować miejscówki.');
        }

        this.id = id ?? uuid();
        this.name = name;
        this.description = description;
        this.image = image;
        this.latitude = latitude;
        this.longitude = longitude;
        this.siteUrl = siteUrl;
        this.facebookUrl = facebookUrl;
        this.youtubeUrl = youtubeUrl;
        this.instagramUrl = instagramUrl;
    }
}
