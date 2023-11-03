const express = require('express')
const app = express()
const core = require('cors')
const bodyParser = require('body-parser')
const todoRoute = require('./src/perntodo/routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(core())

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.use('/api/v1/todo', todoRoute)

const port = 5000
app.listen(port, () => console.log(`server running on localhost ${port}`))
