const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');
const command = process.argv[2];
const argv = yargs.argv;

if (command === 'add') {
    notes.addNote(process.argv[3], process.argv[4]);
} else if (command === 'list') {
    notes.listNotes(argv);
} else if (command === 'remove') {
    notes.removeNote(process.argv[3]);
} else if (command === 'read') {
    notes.readNote(argv.title);
} else {
    console.log('Command not recognized');
}