const express = require('express');
const routes = require('./routes/index.js')

const PORT = 3001;
const app = express()

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json())

app.use(routes);

app.listen(PORT, () =>
    console.log(`Today I am listening on port ${PORT}.  Blah, blah, blah ...`)
);