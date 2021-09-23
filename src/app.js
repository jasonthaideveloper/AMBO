const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 8080;

const db = require('./config/db/config');

// Connect to DB
db.connect();

// Template engine
app.engine('hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');

// HTTP logger
app.use(morgan('combined'));

// Set path views
app.set('views', path.join(__dirname, 'resources/views'));
console.log("Path", path.join(__dirname, '/resources/views'));

// Get static file from public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/thuoc-tinh-chung', (req, res) => {
    console.log(req);
    res.render('thuoc-tinh-chung');
})

app.get('/nha-cung-cap', (req, res) => {
    console.log(req);
    res.render('nha-cung-cap');
})

app.get('/khach-hang', (req, res) => {
    console.log(req);
    res.render('khach-hang');
})

app.get('/san-pham', (req, res) => {
    console.log(req);
    res.render('san-pham');
})

app.get('/don-hang', (req, res) => {
    console.log(req);
    res.render('don-hang');
})

app.get('/', (req, res) => {
    console.log(req);
    res.render('tong-quan');
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));