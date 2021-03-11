let viewfn = require('./commands/display.js');
let input = process.argv.slice(2);
let cmd = input[0];

viewfn.display(input[0]);
