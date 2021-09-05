let display = require('./commands/display.js');
let input = process.argv.slice(2);
let option = input[0];

if (input[2].length == '2') {
  if (
    (input[0] == '-s' && input[1] == '-b' && input[1] == '-n') ||
    (input[0] == '-b' && input[1] == '-s' && input[1] == '-n') ||
    (input[0] == '-b' && input[1] == '-n' && input[1] == '-s')
  ) {
    for (let idx = 2; idx < input.length; idx++) {
      display.sb(input[idx]);
    }
  } else if (
    (input[0] == '-s' && input[1] == '-n' && input[1] == '-b') ||
    (input[0] == '-n' && input[1] == '-s' && input[1] == '-b') ||
    (input[0] == '-n' && input[1] == '-b' && input[1] == '-s')
  ) {
    for (let idx = 2; idx < input.length; idx++) {
      display.sn(input[idx]);
    }
  }
} else if (input[1].length == '2') {
  if (
    (input[0] == '-s' && input[1] == '-n') ||
    (input[0] == '-n' && input[1] == '-s')
  ) {
    for (let idx = 2; idx < input.length; idx++) {
      display.sn(input[idx]);
    }
  } else if (
    (input[0] == '-s' && input[1] == '-b') ||
    (input[0] == '-b' && input[1] == '-s')
  ) {
    for (let idx = 2; idx < input.length; idx++) {
      display.sb(input[idx]);
    }
  }
} else if (input[0].length == '2') {
  switch (option) {
    case '-s':
      for (let idx = 1; idx < input.length; idx++) {
        display.lineSpace(input[idx]);
      }
      break;
    case '-b':
      for (let idx = 1; idx < input.length; idx++) {
        display.numberedLines(input[idx]);
      }
      break;
    case '-n':
      for (let idx = 1; idx < input.length; idx++) {
        display.numberedAllLines(input[idx]);
      }
      break;
    default:
  }
} else {
  // loop to print all the Files in Console
  for (let idx = 0; idx < input.length; idx++) {
    display.fullPrint(input[idx]);
  }
}
