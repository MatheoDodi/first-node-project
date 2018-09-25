const addNote = (title, body) => {
    console.log('Adding note', title, body);
};

const listNotes = (list) => {
    console.log(list);
}

const readNote = (note) => {
    console.log(note);
}

const removeNote = (notes, deletedNote) => {
    console.log(notes);
    const newNotes = [...notes];
    const index = newNotes.indexOf(deletedNote);

    newNotes.splice(index, 1);

    console.log(newNotes);
}

module.exports = {
    addNote,
    listNotes,
    readNote,
    removeNote
}