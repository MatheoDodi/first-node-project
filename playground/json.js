const fs = require('fs');

const originalNote = {
    title: 'Some Title',
    body: 'Some body'
}

const originalNoteString =  JSON.stringify(originalNote);

console.log(originalNoteString);

fs.writeFileSync('notes.json', originalNoteString);

const noteString = fs.readFileSync('notes.json');

const noteStringObj = JSON.parse(noteString);

console.log(noteStringObj);
