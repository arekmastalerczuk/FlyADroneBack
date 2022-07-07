export interface SimpleSpotEntity {
    id: string;
    latitude: number;
    longitude: number;

}

export interface SpotEntity extends SimpleSpotEntity {
    name: string;
    description?: string;
    image?: string;
    siteUrl?: string;
    facebookUrl?: string;
    youtubeUrl?: string;
    instagramUrl?: string;
}

export interface NewSpotEntity extends Omit<SpotEntity, 'id'> {
    id?: string;
}
