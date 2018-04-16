# React + Node webcam image caputre

Capture screenshot from Your webcam, sends it into server. The server save it in `/public/uploads` folder.

## How to run

```
yarn install
yarn start
yarn start:server
```

You have to run both `yarn start` and `yarn start:server` in separate consoles.

## Using different file upload endpoint or server

If You want to use different server to upload screenshots, You can change host:

```
./package.json:
"proxy": "http://localhost:4000",
```

To change API URI You can edit:

```
./src/App.js:
App -> uploadImage method
const url = '/upload-face';
```
