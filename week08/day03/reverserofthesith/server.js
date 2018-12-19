const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/sith', (req, res) => {
  const { text } = req.body;
  changedText = text;
  res.json({ 'result': changedText });
});

app.listen(PORT);