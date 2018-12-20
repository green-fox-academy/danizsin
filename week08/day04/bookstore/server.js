'use strict';
require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/assets', express.static('assets'));


const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'bookstore'
});

conn.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('connection established');
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/books', function (req, res) {
  const selectAll = `SELECT book_mast.book_name, author.aut_name, category.cate_descrip, publisher.pub_name, book_mast.book_price FROM ((book_mast INNER JOIN author ON book_mast.aut_id=author.aut_id) INNER JOIN publisher ON book_mast.pub_id=publisher.pub_id) INNER JOIN category ON book_mast.cate_id=category.cate_id;`;
  conn.query(selectAll, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(data);
  });
});

app.get('/categselect', function (req, res) {
  conn.query('SELECT cate_descrip FROM category;', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(data);
  });
});

app.get('/publisherselect', function (req, res) {
  conn.query('SELECT pub_name FROM publisher;', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(data);
  });
});

app.post('/filter', function (req, res) {
  const { categ, publisher, pricerange } = req.body;
  let queries = [];
  let sql = `SELECT book_mast.book_name, author.aut_name, category.cate_descrip, publisher.pub_name, book_mast.book_price FROM ((book_mast INNER JOIN author ON book_mast.aut_id=author.aut_id) INNER JOIN publisher ON book_mast.pub_id=publisher.pub_id) INNER JOIN category ON book_mast.cate_id=category.cate_id WHERE `;

  if (categ && categ != '' && categ != undefined) {
    
  }

  if (publisher && publisher != '' && publisher != undefined) {
    queries.push
  }

  if (pricerange && pricerange != '' && pricerange != undefined) {

  }

  sql += ';';

  conn.query(sql, [], (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(data);
  });
});

app.listen(PORT, console.log(`Listening on PORT: ${PORT}`));