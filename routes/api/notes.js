const router = require('express').Router()

// get requests
router.get('/', (req, res) => {
    console.log(`${req.method} requests to get something.`)
    return res.json(`${req.method} sucessfully done!`)
})

router.get ('/api/notes', (req, res) => {
    console.log(`${req.method} can read the note!`)
    return 
})

// post request
router.post('/notes', (req, res) => {
    console.log(`${req.method} requests to make a new note.`)
    return res.json(`${req.method} sucessfully done!`)
})

// delete request
router.delete('/notes/:id', (req, res) => {
    console.log(`${req.method} requests to delete note.`)
    return res.json(`${req.method} sucessfully done!`)
})
module.exports = router;