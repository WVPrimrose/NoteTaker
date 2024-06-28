const router = require('express').Router()
const path = require('path');

router.get('/notes', (req, res) => {
    // console.log(`${req.method} requests for notes.html.`)
    res.sendFile(path.join(__dirname,'../public/notes.html'))

})

router.get('*', (req, res) => {
    // console.log(`${req.method} requests for index.html.`)
    // return index.html
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

module.exports = router;