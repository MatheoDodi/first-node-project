const Emitter = require('./playground/emitter');

const emtr = new Emitter();

emtr.on('greet', function() {
    console.log('Hello');
});

emtr.on('greet', function() {
    console.log('A greeting occurred!');
});

emtr.emit('greet');