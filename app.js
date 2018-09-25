const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const command = process.argv[2];
const argv = yargs.argv;

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.listNotes(argv);
} else if (command === 'remove') {
    notes.removeNote(argv._, argv._[2]);
} else if (command === 'read') {
    notes.readNote(argv.title);
} else {
    console.log('Command not recognized');
}