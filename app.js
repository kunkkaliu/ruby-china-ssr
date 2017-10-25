const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const serverRender = require('./dist_server/js/main.js');

const app = new express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/css', express.static(path.join(__dirname, 'dist/css')));
app.use('/js', express.static(path.join(__dirname, 'dist/js')));
app.use('/fonts', express.static(path.join(__dirname, 'dist/fonts')));
app.use('/images', express.static(path.join(__dirname, 'dist/images')));
app.use('/favicon.ico', express.static(path.join(__dirname, 'dist/favicon.ico')));

app.use(serverRender);

const PORT = 3000;
const HOST = '127.0.0.1';

app.listen(PORT, HOST, () => {
    console.log(`Server listening on ${HOST} port ${PORT}`);
});