const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 8080;

const db = require('./config/db/config');

const route = require('./routes/routes');

// Connect to DB
db.connect();

// Template engine
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');

// HTTP logger
app.use(morgan('combined'));

// Set path views
app.set('views', path.join(__dirname, 'resources/views'));
console.log('Path', path.join(__dirname, '/resources/views'));

// Get static file from public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Khởi tạo route
route(app);

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`),
);
