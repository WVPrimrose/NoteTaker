const router = require (express).router

router.post('./notes', (req, res) => {
    console.log(`${req.method} requests to make a new note.`)
    return res.json(`${req.method} sucessfully done!`)
})

router.delete('./notes/:id', (req, res) => {
    console.log(`${req.method} requests to delete note.`)
    return res.json(`${req.method} sucessfully done!`)
})

router.get('./', (req, res) => {
    console.log(`${req.method} requests to get something.`)
    return res.json(`${req.method} sucessfully done!`)
})

router.get ('/api/notes', (req, res) => {
    console.log(`${req.method} can read the note!`)
    return 
})

module.exports = router;