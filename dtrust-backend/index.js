const express = require('express')
const app = express()
const port = 8080

var notion = require('./routes/notion')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/notion', notion)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})