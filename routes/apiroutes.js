const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving all the tips
router.get('/', (req, res) => {
  readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI tip
router.post('/', (req, res) => {
  console.log(req.body);

  const { title,text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    const parsedData = readAndAppend(newNote, './db/db.json');
    res.json(parsedData);
  } else {
    res.error('Error in adding note');
  }
});

module.exports =router;
