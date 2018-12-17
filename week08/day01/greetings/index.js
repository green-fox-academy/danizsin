const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  // render `home.ejs`
  const { name } = req.query;
  if (name) {
    res.render('home', {
      name: `${name}`
    });
  } else {
    res.render('home', {
      name: `guest`
    });
  }
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});