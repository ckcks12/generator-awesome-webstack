const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    req.list.findAll().then((list) => {
        res.render('index', {title: 'awesome webstack', list})
    })
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
