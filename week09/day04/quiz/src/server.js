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
  database: 'quizapp'
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

app.get('/questions', (req, res) => {
  res.sendFile(path.join(__dirname, './static/html/questions.html'));
});

app.get('/listquestions', (req, res) => {
  const sql = `SELECT * FROM questions;`;
  conn.query(sql, (err, data) => {
    if (err) {
      res.status(500).json({ 'answer': 'error at selection' });
      return;
    } else {
      res.status(200).json(data);
    }
  });
});

const generateRandomId = (data) => {
  const maxid = data.map(e => e.id).reduce((acc, val) => Math.max(acc, val), -Infinity);
  const randomNumber = Math.floor(Math.random() * maxid + 1);
  if (data.some(row => row.id == randomNumber)) {
    return randomNumber;
  } else {
    return generateRandomId(data);
  }
}

app.get('/game', (req, res) => {
  const sql = `SELECT * FROM questions;`;
  conn.query(sql, (err, data) => {
    if (err) {
      res.status(500).json({ 'answer': 'error at selection' });
      return;
    } else {
      const randomQId = generateRandomId(data);
      const randQSql = `SELECT * FROM questions WHERE id=?;`;
      conn.query(randQSql, [randomQId], (qError, qData) => {
        if (qError) {
          res.status(500).json({ 'answer': 'error at question selection' });
          return;
        } else {
          const answersSql = `SELECT * FROM answers WHERE question_id=?;`;
          conn.query(answersSql, [randomQId], (ansErr, ansData) => {
            if (ansErr) {
              res.status(500).json({ 'answer': 'error at answers selection' });
              return;
            } else {
              const resObj = {
                'id': qData[0].id,
                'question': qData[0].question,
                'answers': ansData
              }
              res.status(200).json(resObj);
            }
          });
        }
      });
    }

  });
});

app.delete('/questions/:id', (req, res) => {
  const { id } = req.params;
  if (id) {
    const sqlQuestion = `DELETE FROM questions WHERE id=?;`;
    const sqlAnswers = `DELETE FROM answers WHERE question_id=?;`;
    conn.query(sqlQuestion, [id], (err, data) => {
      if (err) {
        res.status(500).json({ 'answer': 'error at deletion' });
        return;
      } else {
        conn.query(sqlAnswers, [id], (delErr, delData) => {
          if (delErr) {
            res.status(500).json({ 'answer': 'error at deletion' });
            return;
          } else {
            res.status(200).json({ 'answer': 'success' });
          }
        });
      }
    });
  }
});

app.post('/questions', (req, res) => {
  const { question, answer1, answer2, answer3, answer4, iscorrect } = req.body;
  const questionSql = `INSERT INTO questions (id, question) VALUES (?,?);`;
  conn.query(questionSql, [null, question], (err, data) => {
    if (err) {
      res.status(500).json({ 'answer': 'error inserting question' });
      return;
    } else {
      let answersSql;
      switch (iscorrect) {
        case '1':
          answersSql = `INSERT INTO answers (id, question_id, answer, is_correct) VALUES (null,?,?,1), (null,?,?,0), (null,?,?,0), (null,?,?,0);`;
          break;
        case '2':
          answersSql = `INSERT INTO answers (id, question_id, answer, is_correct) VALUES (null,?,?,0), (null,?,?,1), (null,?,?,0), (null,?,?,0);`;
          break;
        case '3':
          answersSql = `INSERT INTO answers (id, question_id, answer, is_correct) VALUES (null,?,?,0), (null,?,?,0), (null,?,?,1), (null,?,?,0);`;
          break;
        case '4':
          answersSql = `INSERT INTO answers (id, question_id, answer, is_correct) VALUES (null,?,?,0), (null,?,?,0), (null,?,?,0), (null,?,?,1);`;
          break;
      }
      conn.query(answersSql, [data.insertId, answer1, data.insertId, answer2, data.insertId, answer3, data.insertId, answer4], (ansErr, ansData) => {
        if (ansErr) {
          console.log(ansErr);
          res.status(500).json({ 'answer': 'error inserting multiple data' });
          return;
        }
        res.status(200).json({ 'answer': 'success' });
      });
    }
  });
});


app.listen(PORT, console.log(`Listening on PORT: ${PORT}`));