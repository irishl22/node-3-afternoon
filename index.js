require('dotenv').config()
const express = require('express')
const massive = require('massive')
const products_contoller = require('./products_controller')

const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
}).catch(err => console.log(err))

app.use(express.json());

app.post('/api/products', products_contoller.create)

app.get('/api/products', products_contoller.getAll)

app.get('/api/products/:id', products_contoller.getOne)

app.put('/api/products/:id', products_contoller.update)

app.delete('/api/products/:id', products_contoller.delete)

app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`))
