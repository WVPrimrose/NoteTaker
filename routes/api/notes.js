const router = require('express').Router()
const notes = require('../../db/db.json')
const fs = require('fs');
const uuid = require('../../helpers/uuid.js')
const path = require('path');

// get request

router.get ('/notes', (req, res) => {
    console.log(`${req.method} can read the note!`)
    res.sendFile(path.join(__dirname, '../../db/db.json'));
    // return res.json('Finally done!' (notes))
})

// post request
router.post('/notes', (req, res) => {
    console.log(`${req.method} requests to make a new note.`)
    // const title = req.body.title;
    // const text = req.body.text;
    // if (title && text) {
    //     const newNote = {
    //         note_id: uuid(),
    //         title,
    //         text,
    //     };
    //     const noteString = JSON.stringify(newNote);
    //     console.log(noteString);
    // const response = {
    //     status: 'success',
    //     body: newNote,
    // };
    // }
    let db = fs.readFileSync('db/db.json');
        db = JSON.parse(db);
        res.json(db);
        console.log
        let userNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuid(),
        };
        db.push(userNote);
        fs.writeFileSync('db/db.json', JSON.stringify(db));
        res.json(db);
    return res.json(`${req.method} sucessfully done!`)
})

// delete request
router.delete('/notes/:id', (req, res) => {
    console.log(`${req.method} requests to delete note.`)
    return res.json(`${req.method} sucessfully done!`)
})
module.exports = router;