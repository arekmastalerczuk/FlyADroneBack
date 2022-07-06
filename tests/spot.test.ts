import {SpotRecord} from '../records/spot.record';

/* eslint-disable no-undef */
test('SpotRecord returns data from database for one entry.', async () => {
    const spot = await SpotRecord.getOne('exampleId');

    expect(spot).toBeDefined();
    expect(spot.id).toEqual('exampleId');
    expect(spot.name).toEqual('Rynek');
    expect(spot.description).toEqual('katowicki rynek');
    expect(spot.latitude).toEqual(50.259474);
    expect(spot.longitude).toEqual(19.022254);
    expect(spot.siteUrl).toEqual('https://katowice.eu');
});

test('SpotRecord returns null from database for unexisting entry.', async () => {
    const spot = await SpotRecord.getOne('noId');
    expect(spot).toBeNull();
});

/* eslint-enables no-undef */
