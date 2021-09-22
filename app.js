const express = require('express');
const app = express();
const port = 8080;

const db = require('./config/db');

// Connect to DB
db.connect();

app.get('/', (req, res) => {
    console.log(req);
  res.send('Hello World!');
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));