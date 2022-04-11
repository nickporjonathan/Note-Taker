const fs = require("fs");
const path = require("path");

function makeNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );

  return note;
}

function eraseNote(id, notesArray) {
  const note = id;
  notesArray = notesArray.filter((note) => note.id, !id);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );

  return note;
}

module.exports = {
  makeNote,
  eraseNote,
};
