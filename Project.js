const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');

router.get('/order', (req, res) => {
    res.send('Hello world');
});

router.get('/products', (req, res) => {
    res.send('Hello world');
});

router.get('/report', (req, res) => {
    res.send('Hello world');
});

router.get('/admin', (req, res) => {
    res.send('Hello world');
});

router.get('/about', (req, res) => {
    res.send('Hello world');
});

router.get('/home', (req, res) => {
    var data = fs.readFileSync('./home.html');
    res.send(data.toString());
});

router.get('/login', (req, res) => {
    res.send('Hello world');
});

router.get('/logout', (req, res) => {
    res.send('Hello world');
});

router.get('/signin', (req, res) => {
    res.send('Hello world');
});

router.get('/contact', (req, res) => {
    res.send('Hello world');
});

app.use('/', router);

app.listen(process.env.port || 3000);

console.log('Web server is listening at port ' + (process.env.port || 3000)); 