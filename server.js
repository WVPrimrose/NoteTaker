const express = require('express');
const json = require('db.json');
const fs = require('fs');

const PORT = 3001;
const app = express()

app.use(express.static('public'));

app.get()

app.post()

app.update()

app.delete()


app.listen(PORT, () =>
    console.log(`Today I am listening on port ${PORT}.  Blah, blah, blah ...`)
);