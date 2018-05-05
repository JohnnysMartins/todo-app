const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

const port = 3003

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.listen(port, ()=>{
    console.log(`BACK END running on port => ${port}`)
})

module.exports = server