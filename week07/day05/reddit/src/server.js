'use strict';
require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/static', express.static('./src/static'));


const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'reddit'
});

conn.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('connection established');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/posts', (req, res) => {
  const sql = `SELECT * FROM posts ORDER BY score DESC;`;
  conn.query(sql, (err, data) => {
    if (err) {
      res.json({
        "error": "error retrieving data from database"
      });
      return;
    }
    res.json(data);
  });
});

app.post('/upvote', (req, res) => {
  const 
});

app.listen(PORT, console.log(`Listening on PORT: ${PORT}`));