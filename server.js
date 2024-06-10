const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.get('/hello/', (req, res) => {
    const pathToHtmlFile = path.resolve(__dirname, './dist/hello.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');

    res.send(contentFromHtmlFile);
});

app.get('/car/', (req, res) => {
    const pathToHtmlFile = path.resolve(__dirname, './dist/car.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');

    res.send(contentFromHtmlFile);
});

app.use('/', express.static(path.resolve(__dirname, './dist')));

app.listen(3000, () => {
    console.log('Application is running on http://localhost:3000');
});
