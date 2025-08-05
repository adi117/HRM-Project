const express = require('express');
const routes = require('./routes/index');
const db = require('./config/db.config');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('✅ API is working');
});

app.use('/api', routes);

module.exports = app;
