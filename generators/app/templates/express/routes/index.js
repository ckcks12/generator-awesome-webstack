const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('index', {title: 'awesome webstack', message: `I like pug because it's damn simple`})
})

router.get('/add/:value', (req, res, next) => {
    req.list.create({
        value: req.params.value
    })
    res.send('added')
})

router.get('/list', (req, res, next) => {
    req.list.findAll().then((list) => {
        res.json(list)
    })
})

module.exports = router
