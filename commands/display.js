const fs = require('fs');

// [Argument 1] is a file or not
function isFileOrNot(dirPath) {
  return fs.lstatSync(dirPath).isFile();
}

function getLinesArr(path) {
  // read contents of the file
  let data = fs.readFileSync(path, 'UTF-8');
  // split the contents by new line
  let lines = data.split(/\r?\n/);
  return lines;
}

// Full Print of all the Files
function fullPrint(path) {
  lines = getLinesArr(path);
  lines.forEach((line) => {
    console.log(line);
  });
}

// Number All Lines
function numberedAllLines(path) {
  lines = getLinesArr(path);
  let count = 1;
  lines.forEach((line) => {
    console.log(count + ' ' + line);
    count++;
  });
}

// Number Non-Empty Lines Only
function numberedLines(path) {
  lines = getLinesArr(path);
  let count = 1;
  lines.forEach((line) => {
    if (line == '') {
      console.log(line);
    } else {
      console.log(count + ' ' + line);
      count++;
    }
  });
}

function sn(path) {
  // read contents of the file
  let data = fs.readFileSync(path, 'UTF-8');
  // split the contents by new line
  let reducedLines = data.replace(/\n\s*\n/g, '\n\n');
  let lines = reducedLines.split(/\r?\n/);
  let count = 1;
  lines.forEach((line) => {
    console.log(count + ' ' + line);
    count++;
  });
}

function sb(path) {
  // read contents of the file
  let data = fs.readFileSync(path, 'UTF-8');
  // split the contents by new line
  let reducedLines = data.replace(/\n\s*\n/g, '\n\n');
  let lines = reducedLines.split(/\r?\n/);
  let count = 1;
  lines.forEach((line) => {
    if (line == '') {
      console.log(line);
    } else {
      console.log(count + ' ' + line);
      count++;
    }
  });
}

function lineSpace(path) {
  // read contents of the file
  let data = fs.readFileSync(path, 'UTF-8');
  // split the contents by new line
  let lines = data.replace(/\n\s*\n/g, '\n\n');
  console.log(lines);
}

module.exports = {
  fullPrint,
  lineSpace,
  numberedAllLines,
  numberedLines,
  sb,
  sn,
};

// ['asdasda', '', '', 'asdasdas', 'asdsadads', 'asadasd'];
// Print with single line breaks
// for (let idx = 0; idx < lines.length; idx++) {
//   if (lines[idx] == '' && lines[idx + 1] == '') {
//     lines.slice(idx, 1);
//   }
// }
// print all lines no spaces
// for (let idx = 0; idx < lines.length; idx++) {
//   if (lines[idx] != '') {
//     console.log(lines[idx]);
//   }
// }

// Filtered Array Implementation
// We Don't Need this Approach as it removes all the Empty Strings
// We need at-least one empty string. for converting multi line break into one line break.
// var filtered = lines.filter(function (el) { //arr.filter() returns an array with el that are not '' empty strings
//   return el != '';
// });
// filtered.forEach(function (line) {
//   console.log(line);
// });
