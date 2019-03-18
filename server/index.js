const express = require('express')
const bodyParser = require('body-parser')
const mc = require('./Controllers/message_contoller')

const app = express()

app.use(bodyParser.json())
app.use( express.static(__dirname + '/../public/build'))

app.get('/api/messages', mc.read)
app.post('/api/messages', mc.create)
app.put('/api/messages/:id', mc.update)
app.delete('/api/messages/:id', mc.delete)

const port = 3001
app.listen(port, () => { console.log(`listening on ${port}`)})