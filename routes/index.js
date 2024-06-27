const router = require (express).router

router.get('/notes', (req, res) => {
    console.log(`${req.method} requests for notes.html.`)
    return notes.html
})

router.get('*', (req, res) => {
    console.log(`${req.method} requests for index.html.`)
    return index.html
})

module.exports = router;