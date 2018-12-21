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
  const { categ_name, pub_name, price_range } = req.body;
  let sql = `SELECT book_mast.book_name, author.aut_name, category.cate_descrip, publisher.pub_name, book_mast.book_price FROM publisher, book_mast, category, author WHERE book_mast.aut_id=author.aut_id AND book_mast.pub_id=publisher.pub_id AND book_mast.cate_id=category.cate_id`;

  if (categ_name && categ_name != '' && categ_name != undefined) {
    if (categ_name != 'all') {
      sql += ` AND cate_descrip = '${categ_name}'`;
    }
  }

  if (pub_name && pub_name != '' && pub_name != undefined) {
    if (pub_name != 'all') {
      sql += ` AND pub_name = '${pub_name}'`;
    }
  }

  if (price_range && price_range != '' && price_range != undefined) {
    sql += ` AND book_price <= ${price_range}`;
  }

  sql += ';';

  conn.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(data);
  });
});

app.listen(PORT, console.log(`Listening on PORT: ${PORT}`));