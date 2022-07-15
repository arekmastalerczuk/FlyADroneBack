# Getting Started with app Dronowisko - świat okiem drona (backend)

## LIVE demo of this project is available on [armast.networkmanager.pl](https://armast.networkmanager.pl "Dronowisko - the world through the eye of a drone")

![Main site view](./images/main-page.png?raw=true "Screen from app")

## About the project

This app allows displaying and adding interesting places on the map, which are worth visiting and where to fly a drone.

After entering a location in the search engine, previously added places with their brief description are returned from
the database (MySQL). The results in a given town can be further narrowed down by typing the street.

The application is connected to the [IMGW weather API](https://danepubliczne.imgw.pl/apiinfo). If a town has a weather
station operated by IMGW, the latest available weather data is displayed for it, if not - the information will not
appear.

![Search results with weather data](./images/searching.png?raw=true "Screen from search engine")

The weather data is validated and the corresponding information appears about whether the current weather conditions are
good or bad for flying a drone.

## Upcoming plans for the expansion of the project:

* Implementation for adding (support with middleware 'multer' on backend prepared) and displaying photos of places,
* Implementation for user registration and login (Passport JS),
* Enabling addition / modification / deletion of added places only for logged-in users (and only for 'own' places),
* Finding a free API with more meteo points (stations) and implementing it,
* Mobile version of app,
* Refactoring the code.

## The project used:

* Node.js,
* Express framework,
* MySQL database,
* TypeScript (backend + frontend),
* React library.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

### `npm start:dev`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.

### `npm test`

Launches the test in JEST.

### `npm run build`

Builds the app for production to the `dist` folder on system.
