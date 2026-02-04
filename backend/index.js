const express = require('express');
const dotenv = require('dotenv');
require('dotenv').config();
const app = express();
const port = process.env.PORT
const data = require('./data/data.json');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/data', (req, res) => {
  res.json({ name: data.users[0].name, icon: data.users[0].icon, line:data.users[0].line,email:data.users[0].email,description:data.users[0].description });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});