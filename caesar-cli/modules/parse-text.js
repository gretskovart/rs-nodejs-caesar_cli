const fs = require('fs');
const { input } = require('./parse-args');

const parseText = () => {
  if (input) {
    return new Promise((resolve) => {
      fs.access(input, fs.constants.F_OK, (err) => {
        if (!err) {
          resolve(fs.createReadStream(input));
        } else {
          process.stderr.write("Input file doesn't exist!\n");
          process.exit(1);
        }
      });
    });
  }

  return process.stdin;
};

module.exports = {
  parseText,
};
