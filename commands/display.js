const fs = require('fs');

function isFileOrNot(dirPath) {
  return fs.lstatSync(dirPath).isFile();
}

function display(path) {
  let isFile = isFileOrNot(path);
  if (isFile == true) {
    let data = fs.readFileSync(path, 'utf8');
    console.log(data);
  } else {
    console.log('not a file');
  }
}

module.exports = {
  display: display,
};
