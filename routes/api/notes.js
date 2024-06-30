const router = require('express').Router()
const notes = require('../../db/db.json')
const fs = require('fs');

// get requests
router.get('/', (req, res) => {
    console.log(`${req.method} requests to get something.`)
    return res.json(`${req.method} sucessfully done!` (notes))

})

router.get ('/notes', (req, res) => {
    console.log(`${req.method} can read the note!`)
    return res.json('Finally done!' (notes))
})

// post request
router.post('/notes', (req, res) => {
    console.log(`${req.method} requests to make a new note.`)
    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
        };
    const response = {
        status: 'success',
        body: newNote,
    };
    }
    return res.json(`${req.method} sucessfully done!`)
})

// delete request
router.delete('/notes/:id', (req, res) => {
    console.log(`${req.method} requests to delete note.`)
    return res.json(`${req.method} sucessfully done!`)
})
module.exports = router;