const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const http = require('http')
const routes = require('./routes')


let app = express()
let server = http.createServer(app)
let port = process.env.PORT || '8080'

if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'))
} else if(process.env.NODE_ENV == 'production' || true) {
    app.use(morgan('combined'))
}

app.use(bodyParser.json())

app.use('/', routes)

server.listen(port, () => console.log(`server started at ${server.address().port}`))
