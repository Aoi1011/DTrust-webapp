const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

var notion = require('./routes/notion');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const corsOpts = {
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'HEAD', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  exposedHeaders: ['Content-Type'],
};
app.use(cors(corsOpts));
app.use('/notion', notion);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
