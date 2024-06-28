const express = require('express');
const json = require('./db/db.json');
const routes = require('./routes/index.js')
const noteRoutes = require('./routes/api/notes.js')

const fs = require('fs');

const PORT = 3001;
const app = express()

app.use(express.static('public'));

app.use(routes);

app.listen(PORT, () =>
    console.log(`Today I am listening on port ${PORT}.  Blah, blah, blah ...`)
);