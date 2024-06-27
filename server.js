const express = require('express');
const json = require('db/db.json');
const routes = require('/routes')
const fs = require('fs');

const PORT = 3001;
const app = express()

app.use(express.static('public'));

app.use(routes);

app.listen(PORT, () =>
    console.log(`Today I am listening on port ${PORT}.  Blah, blah, blah ...`)
);