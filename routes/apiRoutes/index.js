const router = require("express").Router();
const path = require("path");
const { makeNote, eraseNote } = require("../../lib/notes");
const { nanoid } = require("nanoid");
let notesArray = require("../../db/db.json");

router.get("/notes", (req, res) => {
  res.json(notesArray);
});

router.post("/notes", (req, res) => {
  req.body.id = nanoid();
  const note = makeNote(req.body, notesArray);
  res.json(note);
});

router.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  let note;
  notes.map((element, index) => {
    if (element.id == id) {
      note = element;
      notes.splice(index, 1);
      return res.json(note);
    }
  });
});

module.exports = router;
