const express = require('express')
const path = require('path')

const port = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
  let ipaddress = (req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress).split(',')[0]
  let language = req.headers['accept-language'].split(',')[0]
  let software = /\(([^\)]*)\)/.exec(req.headers['user-agent'])[1]

  let data = {
    ipaddress,
    language,
    software
  }

  res.set('Content-Type', 'application/json')
  res.send(JSON.stringify(data))
})

app.listen(port, () => console.log('microservice is on port', port))
