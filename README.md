# Heroes app

## Available Scripts

In the project directory, you can run:

### `cd ./client`
### `yarn start` or `npm start` to start client

### `cd ./server`
### `yarn dev` or `npm run dev` to start server


Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
Server will run on http://localhost:3001.\
MongoDB have to run on localhost:27017.

### `yarn test`

Launches the test runner in the interactive watch mode.\

## ALERT

To run app you have to run `Mongodb` server, start `app server` after run `client app`.\

## Learn More

On Home page you have link to heroes page, and simple routing in header: Main page, Heroes page, Add new Hero Page.\
On Heroes Page have list of heroes and pages(heroes list) paggination, each list item(hero) show us 'poster_image' & 'nickname',\
item also have link to Hero Info Page('show more').\
On Add new Page you have form with text-inputs which fill Hero info and file-input which allows add poster_image.\
On Hero Info Page you have all info about current Hero, with gallery from set of images, you can update hero info,\
delete hero, add image to set of images and remove image from images.


