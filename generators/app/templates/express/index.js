const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const http = require('http')
const routes = require('./routes')
const Sequelize = require('sequelize')


const sequelize = new Sequelize(
    'test',
    'root',
    'password',
    {
        'host': 'localhost',
        'dialect': 'mysql'
    }
)
const List = sequelize.define('list', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    value: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})
List.sync()

let app = express()
let server = http.createServer(app)
let port = process.env.PORT || '8080'

if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'))
} else if(process.env.NODE_ENV == 'production' || true) {
    app.use(morgan('combined'))
}

app.set('view engine', 'pug')

app.use(bodyParser.json())

app.use((req, res, next) => {
    req.sequelize = sequelize
    req.list = List
    next()
})

app.use('/', routes)

server.listen(port, () => console.log(`server started at ${server.address().port}`))
