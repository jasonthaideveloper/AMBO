require("dotenv").config();
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 8080;

const db = require('./config/db/config');

const route = require('./routes/routes');

// Connect to DB
db.connect();

// Template engine
app.engine('hbs', handlebars({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
        sliceString: (string, num) => {
            let strUpper = string;
            return strUpper.length > num ? strUpper.slice(0, num) + '...' : strUpper;
        },
        select: (string) => string,
    }
}));
app.set('view engine', 'hbs');

// HTTP logger
app.use(morgan('combined'));

// Cấu hình method HTTP
app.use(methodOverride('_method'));

// Set path views
app.set('views', path.join(__dirname, 'resources/views'));
console.log('Path', path.join(__dirname, '/resources/views'));

// Get static file from public folder
app.use(express.static(path.join(__dirname, 'public')));

// // Get static file from static folder
// app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Khởi tạo route
route(app);

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`),
);
