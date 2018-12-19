const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

const isVowel = (character) => {
  let lowerCaseChar = character.toLowerCase();
  return ['a', 'á', 'u', 'ú', 'o', 'ó', 'e', 'é', 'i', 'í', 'ü', 'ű', 'ö', 'ő'].some(vowel => vowel === lowerCaseChar);
}
const translate = (hungarian) => {
  let teve = hungarian;
  let length = teve.length;
  let checkedVowels = [];
  for (let i = 0; i < length; i++) {
    let c = teve[i];
    if (isVowel(c) && checkedVowels.indexOf(c) === -1) {
      teve = teve.split(c).join(`${c}v${c}`);
      i += 2;
      length += 2;
      checkedVowels.push(c);
    }
  }
  return teve;
}

app.post('/translate', (req, res) => {
  const { text, lang } = req.body;
  if (lang.toLowerCase() == 'hu') {
    if (text) {
      res.json({ 'result': `${translate(text)}` });
    } else {
      res.json({ 'error': 'I can\'t translate that!' });
    }
  } else if (lang.toLowerCase() == 'en') {
    if (text) {
      res.json({ 'result': `${translateEN(text)}` });
    } else {
      res.json({ 'error': 'I can\'t translate that!' });
    }
  } else {
    res.json({ 'error': 'I can\'t translate that!' });
  }
});

app.listen(PORT);