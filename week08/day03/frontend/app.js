const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  const { input } = req.query;
  if (input) {
    const resObj = {
      'received': input,
      'result': input * 2
    }
    res.json(resObj);
  } else {
    res.json({ 'error': 'Please provide an input!' });
  }
});

app.get('/greeter', (req, res) => {
  const { name, title } = req.query;
  if (name && title) {
    res.json({ 'welcome_message': `Oh, hi there ${name}, my dear ${title}!` });
  } else if (name) {
    res.json({ 'welcome_message': `Oh, hi there ${name}, my dear student!` });
  } else if (title) {
    res.json({ 'welcome_message': `Oh, hi there petike, my dear ${title}!` });
  } else {
    res.json({ 'error': 'Please provide a name!' });
  }
});

app.get('/appenda/:appendto', (req, res) => {
  const { appendto } = req.params;
  if (appendto) {
    res.json({ 'appended': `${appendto}a` });
  }
});

app.get('/appenda', (req, res) => {
  res.status(404).send();
});

const factorio = (par) => {
  let fac = 1;
  for (let i = par; i > 0; i--) {
    fac *= i;
  }
  return fac;
}

const sum = (par) => {
  let summ = 0;
  for (let i = 0; i <= par; i++) {
    summ += i;
  }
  return summ;
}

app.post('/dountil/:action', (req, res) => {
  const { action } = req.params;
  if (action == 'sum') {
    res.json({ 'result': sum(req.body.until) });
  } if (action == 'factor') {
    res.json({ 'result': factorio(req.body.until) });
  } else {
    res.json('error: please provide input');
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});