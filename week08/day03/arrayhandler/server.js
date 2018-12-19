const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/arrays', (req, res) => {
  const { what, numbers } = req.body;
  switch (what) {
    case 'sum':
      let summ = 0;
      numbers.forEach(e => {
        summ += e;
      });
      res.json({ 'result': `${summ}` });
      break;

    case 'multiply':
      let multiplication = 1;
      numbers.forEach(e => {
        multiplication *= e;
      });
      res.json({ 'result': `${multiplication}` });
      break;

    case 'double':
      const doubled = numbers.map(e => e * 2);
      res.json({ 'result': `${doubled}` });
      break;

    default: res.json({ 'error': 'Please provide what to do with the numbers!' });
  }
});

app.listen(PORT);