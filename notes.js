const fs = require('fs');

const addNote = (title, body) => {
    const stringNotes = fs.readFileSync('./notes-data.json')

    
    const notes = JSON.parse(stringNotes);
    let note = {
        title,
        body
    }
    notes.push(note);
    debugger;
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const listNotes = (list) => {
    console.log(list);
}

const readNote = (note) => {
    console.log(note);
}

const removeNote = (deletedNote) => {
    const notes = JSON.parse(fs.readFileSync('./notes-data.json'));
    
    console.log(notes, deletedNote);
    const newNotes = notes.filter(note => note.title !== deletedNote);

    
    fs.writeFileSync('notes-data.json', JSON.stringify(newNotes));
}

module.exports = {
    addNote,
    listNotes,
    readNote,
    removeNote
}