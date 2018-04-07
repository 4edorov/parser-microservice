const express = require('express')
const path = require('path')

const port = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
  console.log('req', req.connection.remoteAddress)

  let data = {
    ipaddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  }

  res.json(data)
})

app.listen(port, () => console.log('microservice is on port', port))
