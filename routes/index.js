const router = require('express').Router()
const path = require('path');
const apiNotes = require('./api/notes.js');
const notes = require('../db/db.json')

router.get('/notes', (req, res) => {
    // console.log(`${req.method} requests for notes.html.`)
    res.sendFile(path.join(__dirname,'../public/notes.html'))

})

router.use('/api', apiNotes)

router.get('*', (req, res) => {
    // console.log(`${req.method} requests for index.html.`)
    // return index.html
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

module.exports = router;