export interface SpotEntity {
    id: string;
    name: string;
    description?: string;
    latitude: number;
    longitude: number;
    image?: string;
    siteUrl?: string;
    facebookUrl?: string;
    youtubeUrl?: string;
    instagramUrl?: string;
}

export interface NewSpotEntity extends Omit<SpotEntity, 'id'> {
    id?: string;
}
