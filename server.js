const express = require('express');
const json = require('./db/db.json');
const noteRoutes = require('./routes/api/notes.js')
const fs = require('fs');

const PORT = 3001;
const app = express()

app.use(express.static('public'));

app.use('/api', noteRoutes);

app.listen(PORT, () =>
    console.log(`Today I am listening on port ${PORT}.  Blah, blah, blah ...`)
);