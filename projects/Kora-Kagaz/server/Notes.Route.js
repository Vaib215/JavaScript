const express = require('express');
const router = express.Router();
const Note = require('./model/Notes');

// create hello world route
router.get('/', (req, res) => {
  res.send('Hello World!');
});

// create a new note
router.post('/notes', (req, res) => {
  const newNote = new Note({
    title: req.body.title,
    content: req.body.content
  });
  newNote.save((err, note) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json(note);
    }
  });
});

// get all notes
router.get('/notes', (req, res) => {
  Note.find({}, (err, notes) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(notes);
    }
  });
});

// get a single note
router.get('/notes/:id', (req, res) => {
  Note.findById(req.params.id, (err, note) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(note);
    }
  });
});

// update a note
router.put('/notes/:id', (req, res) => {
  Note.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, note) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(note);
    }
  });
});

// delete a note
router.delete('/notes/:id', (req, res) => {
  Note.findByIdAndDelete(req.params.id, (err, note) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(note);
    }
  });
});

module.exports = router;
