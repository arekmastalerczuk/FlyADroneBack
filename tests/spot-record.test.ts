import {SpotRecord} from '../records/spot.record';

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

/* eslint-disable no-undef */
test('Can build SpotRecord', () => {
    const spot = new SpotRecord(defaultSpotObj);

    expect(spot.name).toEqual('[TEST] Example Name');
    expect(spot.description).toEqual('This is the best place in city.');
    expect(spot.image).toEqual('example.jpg');
    expect(spot.siteUrl).toEqual('https://google.com/');
    expect(spot.facebookUrl).toEqual('https://facebook.com/');
    expect(spot.youtubeUrl).toEqual('https://youtube.com/');
    expect(spot.instagramUrl).toEqual('https://instagram.com/');
    expect(spot.latitude).toEqual(50.264279);
    expect(spot.longitude).toEqual(19.023651);
    expect(spot.spotAddress).toEqual('rondo Gen. Jerzego Ziętka, Katowice');
});

test('Validate spot with no name', () => {
    expect(() => new SpotRecord({
        ...defaultSpotObj,
        name: '',
    })).toThrow('Nazwa miejscówki nie może być pusta, albo dłuższa niż 100 znaków.');
});

test('Validate spot with too long name', () => {
    expect(() => new SpotRecord({
        ...defaultSpotObj,
        name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus volutpat aliquets.',
    })).toThrow('Nazwa miejscówki nie może być pusta, albo dłuższa niż 100 znaków.');
});

test('Validate spot with too long description', () => {
    expect(() => new SpotRecord({
        ...defaultSpotObj,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi asperiores aut consectetur consequatur consequuntur distinctio eius, exercitationem illum laudantium nemo nobis nulla officia possimus praesentium quam quod repellat sapiente sequi, ullam? Aliquid architecto asperiores aut, blanditiis consequatur cumque distinctio eaque fugit inventore ipsa odio, omnis quam rerum vel vitae. Eaque modi nemo possimus quibusdam recusandae! Accusamus consequuntur dolore, facere libero molestias quae quibusdam. Aliquam at atque culpa cum cupiditate dignissimos dolorem enim, est et fugit illum ipsum magnam minus modi neque nihil nobis officiis omnis porro quas quis ratione reiciendis totam unde voluptates voluptatibus voluptatum. Aperiam asperiores dolorem dolorum ea earum eligendi, est eveniet exercitationem facere ipsum itaque maxime modi nam, nesciunt nostrum obcaecati placeat quia quis ratione sapiente sed tempore unde veniam vero voluptates? Aliquid, aperiam blanditiis exercitatione tuetres.',
    })).toThrow('Opis miejscówki nie może przekraczać 1000 znaków.');
});

test('Validate if site url is too long', () => {
    expect(() => new SpotRecord({
        ...defaultSpotObj,
        siteUrl: 'https://example.com/example/something/asdadadsa/asdsasdssad/adsdasdsadsasdsadasdadsadsadasdasdasdad.html',
    })).toThrow('Link do strony www lub social media użytkownika nie może być dłuższy niż 100 znaków.');
});

test('Validate if Facebook url is too long', () => {
    expect(() => new SpotRecord({
        ...defaultSpotObj,
        facebookUrl: 'https://facebook.com/example/something/asdadadsa/asdsasdssad/adsdasdsadsasdsadasdadsadsadasdasdasdad.html',
    })).toThrow('Link do strony www lub social media użytkownika nie może być dłuższy niż 100 znaków.');
});

test('Validate if site YouTube url is too long', () => {
    expect(() => new SpotRecord({
        ...defaultSpotObj,
        youtubeUrl: 'https://youtube.com/example/something/asdadadsa/asdsasdssad/adsdasdsadsasdsadasdadsadsadasdasdasdad.html',
    })).toThrow();
});

test('Validate if Instagram url is too long', () => {
    expect(() => new SpotRecord({
        ...defaultSpotObj,
        instagramUrl: 'https://instagram.com/example/something/asdadadsa/asdsasdssad/adsdasdsadsasdsadasdadsadsadasdasdasdad.html',
    })).toThrow('Link do strony www lub social media użytkownika nie może być dłuższy niż 100 znaków.');
});

test('Validate if Spot Address is too long', () => {
    expect(() => new SpotRecord({
        ...defaultSpotObj,
        spotAddress: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus volutpat aliquets. Aeros.',
    })).toThrow('Adres miejscówki nie może przekraczać 150 znaków.');
});

/* eslint-enable no-undef */
