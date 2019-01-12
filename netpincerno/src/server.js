'use strict';
require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();
const session = require('express-session');
const PORT = 3000;

app.use(session({
  secret: 'kiscica',
  cookie: {}
}));

app.use(express.json());
app.use('/static', express.static('./src/static'));


const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'netpincerno'
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

app.get('/restaurants', (req, res) => {
  res.sendFile(path.join(__dirname, 'static/html/restaurants.html'));
});

app.get('/checksession', (req, res) => {
  const { userid, fullname, username } = req.session;
  if (userid, fullname, username) {
    res.json({
      answer: 'success',
      userid,
      fullname,
      username
    });
  } else {
    res.json({ answer: 'no such session' });
  }
});

app.get('/logout', (req, res) => {
  const { userid, fullname, username } = req.session;
  if (userid, fullname, username) {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
        res.json({ answer: 'error destroying user session' });
        return;
      }
      res.json({ answer: 'success' });
    });
  } else {
    res.json({ answer: 'no such session' });
  }
});

app.post('/login', (req, res) => {
  const { loginName, loginPwd } = req.body;
  if (loginName && loginPwd && loginPwd.trim() != '' && loginName.trim() != '') {
    const sql = `SELECT * FROM users WHERE username='${loginName}' AND password='${loginPwd}';`;
    conn.query(sql, (err, data) => {
      if (err) {
        res.status(500).json({ answer: 'error at selection' });
        return;
      }
      if (data.length > 0) {
        req.session.userid = data[0].id;
        req.session.username = data[0].username;
        req.session.fullname = data[0].fullname;
        res.status(200).json({
          answer: 'success',
          id: data[0].id,
          username: data[0].username,
          fullname: data[0].fullname
        });
      } else {
        res.status(400).json({ answer: 'Username or Password incorrect!' });
      }
    });
  } else {
    res.status(400).json({ answer: 'Please fill out all fields!' })
  }
});

app.post('/register', (req, res) => {
  const { fullname, username, email, password } = req.body;
  if (!fullname || fullname == undefined ||
    !username || username == undefined ||
    !email || email == undefined ||
    !password || password == undefined) {
    res.status(400).json({
      answer: 'Please fill out all fields!'
    });
  } else {
    const isValidFullname = /^[a-záéíűúőóüöA-ZÁÍÉŰÚŐÓÜÖ -]*$/.test(fullname);
    const isValidUsername = /^[a-zA-Z0-9]{1,45}$/.test(username);
    const isValidEmail = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9]{8,}$/.test(password);
    if (isValidFullname && isValidUsername && isValidEmail && isValidPassword) {
      const sql = `INSERT INTO users (fullname, username, email, password, regdate, lastlogin) VALUES (?,?,?,?, UNIX_TIMESTAMP(now()), UNIX_TIMESTAMP(now()));`;
      conn.query(sql, [fullname, username, email, password], (err, data) => {
        if (err) {
          res.status(500).json({
            answer: 'Error inserting data to database'
          })
          console.log(err);
          return;
        }
        res.status(200).json({
          answer: 'success'
        });
      });
    } else if (!isValidFullname) {
      res.status(500).json({
        answer: 'Fullname must contain only letters and spaces!'
      });
    } else if (!isValidUsername) {
      res.status(500).json({
        answer: 'Username must contain only letters and numbers!'
      });
    } else if (!isValidEmail) {
      res.status(500).json({
        answer: 'Not valid e-mail format!'
      });
    } else if (!isValidPassword) {
      res.status(500).json({
        answer: '8 characters, 1 uppercase, 1 lowercase, 1 number!'
      });
    }
  }
});

app.get('/listrestaurant', (req, res) => {
  const sql = `SELECT * FROM restaurants;`;
  conn.query(sql, (err, data) => {
    if (err) {
      res.status(500).json({
        answer: 'error selecting from database'
      })
      return;
    }
    res.status(200).json(data);
  });
});

app.get('/showfoods/:id', (req, res) => {
  const { id } = req.params;
  if (id) {
    const sql = `SELECT * FROM foods WHERE rest_id=?;`;
    conn.query(sql, [id], (err, data) => {
      if (err) {
        res.status(500).json({
          answer: 'error at selection'
        });
        return;
      }
      res.status(200).json(data);
    });
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, console.log(`Listening on PORT: ${PORT}`));