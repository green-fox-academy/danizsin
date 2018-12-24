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
        "answer": "error retrieving data from database"
      });
      return;
    }
    res.json(data);
  });
});

//CLICKING ON UPVOTE BUTTON CALLS FOR THIS ENDPOINT
app.put('/upvote', (req, res) => {
  //GETTING THE ID OF THE POST IN THE BODY
  const { postid } = req.body;
  //SELECTING THE POSTS CURRENT SCORE AND IF ITS ALREADY VOTED OR NOT
  conn.query(`SELECT score, voted FROM posts WHERE id='${postid}';`, (err, data) => {
    if (err) {
      res.json({
        "answer": "error retrieving data from database"
      });
      return;
    } else {
      //IF THE POST HAS ALREADY BEEN UPVOTED
      if (data[0].voted == '1') {
        res.json({
          "answer": "already upvoted"
        });
        //IF THE POST HASNT BEEN VOTED YET
      } else if (data[0].voted == '0') {
        //INCREMENT THE POSTS SCORE BY 1 AND SET THE VOTED STATE TO 1 MEANING IT HAS BEEN UPVOTED, WHERE THE ID EQUALS THE ID GOTTEN IN THE BODY OF THE REQUEST
        const sql = `UPDATE posts SET score='${data[0].score + 1}', voted='1' WHERE id='${postid}';`;
        conn.query(sql, (err, success) => {
          if (err) {
            res.json({
              "answer": "error updating data in database"
            });
            return;
          } else {
            //SENDING BACK THE SCORE SO THAT FRONTEND CAN USE THIS VALUE TO PRINT IT ON THE SCREEN AND SENDING AN ANSWER AS WELL
            res.json({
              "answer": "success",
              "score": `${data[0].score + 1}`,
              "voted": "1"
            });
          }
        });
        // IF THE POST HAS ALREADY BEEN DOWNVOTED
      } else if (data[0].voted == '-1') {
        // INCREMENT THE SCORE BY 2 WHERE ID EQUALS THE ID GOTTEN IN REQ BODY
        const sql = `UPDATE posts SET score='${data[0].score + 2}', voted='1' WHERE id='${postid}';`;
        conn.query(sql, (err, success) => {
          if (err) {
            res.json({
              "answer": "error updating data in database"
            });
            return;
          } else {
            //SENDING BACK THE SCORE SO THAT FRONTEND CAN USE THIS VALUE TO PRINT IT ON THE SCREEN AND SENDING AN ANSWER AS WELL
            res.json({
              "answer": "success",
              "score": `${data[0].score + 2}`,
              "voted": "1"
            });
          }
        });
      }
    }
  });
});

//SAME STRUCTURE OF COMMENTS APPLY HERE ONLY CHANING IN VOTING STATES 
app.put('/downvote', (req, res) => {
  const { postid } = req.body;
  conn.query(`SELECT score, voted FROM posts WHERE id='${postid}';`, (err, data) => {
    if (err) {
      res.json({
        "answer": "error retrieving data from database"
      });
      return;
    } else {
      if (data[0].voted == '-1') {
        res.json({
          "answer": "already downvoted"
        });
      } else if (data[0].voted == '0') {
        const sql = `UPDATE posts SET score='${data[0].score - 1}', voted='-1' WHERE id='${postid}';`;
        conn.query(sql, (err, success) => {
          if (err) {
            res.json({
              "answer": "error updating data in database"
            });
            return;
          } else {
            res.json({
              "answer": "success",
              "score": `${data[0].score - 1}`,
              "voted": "-1"
            });
          }
        });
      } else if (data[0].voted == '1') {
        const sql = `UPDATE posts SET score='${data[0].score - 2}', voted='-1' WHERE id='${postid}';`;
        conn.query(sql, (err, success) => {
          if (err) {
            res.json({
              "answer": "error updating data in database"
            });
            return;
          } else {
            res.json({
              "answer": "success",
              "score": `${data[0].score - 2}`,
              "voted": "-1"
            });
          }
        });
      }
    }
  });
});

//ENDPOINT FOR SUBMITTING NEW POST
app.post('/submitnewpost', (req, res) => {
  const { posttitle, posturl } = req.body;
  //  THE NOW() METHOD INSERTS THE CURRENT DATE INTO THE DATABASE, NESTING IT INTO A UNIX_TIMESTAMP METHOD CONVERTS THE DATE TO TIMESTAMP,
  //  IN WHICH FORMAT THE DATABASE STORES DATA ABOUT POST SUBMIT DATES
  const sql = `INSERT INTO posts VALUES(null, ?, '0', UNIX_TIMESTAMP(now()), '0', '1', ?,'0');`;
  //  THE SECOND PARAMETER OF THE QUERY IS AN ARRAY THAT RELATES TO THE QUESTION MARKS IN THE SQL STRING
  conn.query(sql, [posttitle, posturl], (err, data) => {
    if (err) {
      res.json({
        "answer": "error inserting data into database"
      });
      return;
    } else {
      res.json({
        "answer": "success"
      });
    }
  });
});

//  ENDPOINT FOR MODIFYING POST
app.put('/modifypost', (req, res) => {
  const { posttitle, posturl, postid } = req.body;
  const sql = `UPDATE posts SET title=?, url=? WHERE id=?;`;
  //  THE SECOND PARAMETER OF THE QUERY IS AN ARRAY THAT RELATES TO THE QUESTION MARKS IN THE SQL STRING
  conn.query(sql, [posttitle, posturl, postid], (err, data) => {
    if (err) {
      res.json({
        "answer": "error updating data in database"
      });
      return;
    } else {
      res.json({
        "answer": "success"
      });
    }
  });
});

app.delete('/deletepost', (req, res) => {
  const { postid } = req.body;
  const sql = `DELETE FROM posts WHERE id=?;`;
  //  THE SECOND PARAMETER OF THE QUERY IS AN ARRAY THAT RELATES TO THE QUESTION MARK IN THE SQL STRING
  conn.query(sql, [postid], (err, data) => {
    if (err) {
      res.json({
        "answer": "error deleteing post from database"
      });
      return;
    } else {
      res.json({
        "answer": "success"
      });
    }
  });
});

app.listen(PORT, console.log(`Listening on PORT: ${PORT}`));