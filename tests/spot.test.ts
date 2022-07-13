import {SpotRecord} from '../records/spot.record';
import {pool} from '../utils/db';
import {SpotEntity} from '../types';

/* eslint-disable no-undef */
const defaultSpotObj = {
    name: '[TEST] Example Name',
    description: 'This is the best place in city.',
    image: 'example.jpg',
    siteUrl: 'https://google.com/',
    facebookUrl: 'https://facebook.com/',
    youtubeUrl: 'https://youtube.com/',
    instagramUrl: 'https://instagram.com/',
    latitude: 50.264279,
    longitude: 19.023651,
    spotAddress: 'rondo Gen. Jerzego Ziętka, Katowice',
};

afterAll(async () => {
    await pool.end();
});

test('SpotRecord returns data from database for one entry.', async () => {
    const spot = await SpotRecord.getOne('exampleId');

    expect(spot).toBeDefined();
    expect(spot.id).toEqual('exampleId');
    expect(spot.name).toEqual('[TEST] Rynek');
    expect(spot.description).toEqual('katowicki rynek');
    expect(spot.latitude).toEqual(50.259474);
    expect(spot.longitude).toEqual(19.022254);
    expect(spot.siteUrl).toEqual('https://katowice.eu');
    expect(spot.facebookUrl).toBeNull();
    expect(spot.youtubeUrl).toBeNull();
    expect(spot.instagramUrl).toBeNull();
});

test('SpotRecord.getOne returns null from database for unexisting entry.', async () => {
    const spot = await SpotRecord.getOne('noId');
    expect(spot).toBeNull();
});

test('SpotRecord.getAll returns array of found entries.', async () => {
    const spots = await SpotRecord.getAll('');
    expect(spots).not.toEqual([]);
    expect(spots[0]).toBeDefined();
});

test('SpotRecord.getAll returns an empty array when searching for something that not exists.', async () => {
    const spots = await SpotRecord.getAll('qwertyuiop asdfghjkl zaq12wsx');
    expect(spots).toEqual([]);
});

test('SpotRecord.getAll returns not all data but only: id, latitude and longitude', async () => {
    const spots = await SpotRecord.getAll('');
    expect(spots[0].id).toBeDefined();
    expect(spots[0].latitude).toBeDefined();
    expect(spots[0].longitude).toBeDefined();
    expect((spots[0] as SpotEntity).name).toBeUndefined();
    expect((spots[0] as SpotEntity).description).toBeUndefined();
    expect((spots[0] as SpotEntity).image).toBeUndefined();
    expect((spots[0] as SpotEntity).siteUrl).toBeUndefined();
    expect((spots[0] as SpotEntity).facebookUrl).toBeUndefined();
    expect((spots[0] as SpotEntity).youtubeUrl).toBeUndefined();
    expect((spots[0] as SpotEntity).instagramUrl).toBeUndefined();
});

test('SpotRecord.getAll returns array of found entries when searching for "Rynek 1".', async () => {
    const spots = await SpotRecord.getAll('Rynek 1');
    expect(spots).not.toEqual([]);
    expect(spots[0].id).toBeDefined();
});

test('SpotRecord.insert returns new UUID.', async () => {
    const spot = new SpotRecord(defaultSpotObj);

    await spot.insert();
    expect(spot.id).toBeDefined();
    expect(spot.id.length).toEqual(36);
    expect(typeof spot.id).toBe('string');
});

test('SpotRecord.insert inserts data to database.', async () => {
    const spot = new SpotRecord(defaultSpotObj);
    await spot.insert();

    const foundSpot = await SpotRecord.getOne(spot.id);

    expect(foundSpot).toBeDefined();
    expect(foundSpot).not.toBeNull();
    expect(foundSpot.id).toBe(spot.id);
    expect(foundSpot.name).toEqual(spot.name);
    expect(foundSpot.description).toEqual(spot.description);
    expect(foundSpot.image).toEqual(spot.image);
    expect(foundSpot.siteUrl).toEqual(spot.siteUrl);
    expect(foundSpot.facebookUrl).toEqual(spot.facebookUrl);
    expect(foundSpot.youtubeUrl).toEqual(spot.youtubeUrl);
    expect(foundSpot.instagramUrl).toEqual(spot.instagramUrl);
    expect(foundSpot.latitude).toEqual(spot.latitude);
    expect(foundSpot.longitude).toEqual(spot.longitude);
});

/* eslint-enables no-undef */
