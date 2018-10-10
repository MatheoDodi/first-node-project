const fs = require('fs');

var test = fs.readFileSync(__dirname + '/test.txt', 'utf8');

console.log(test);