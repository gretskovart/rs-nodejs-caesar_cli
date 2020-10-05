const fs = require('fs');
const { output } = require('./parse-args');

const writeText = () => {
  if (output) {
    return new Promise((resolve) => {
      fs.access(output, fs.constants.F_OK, (err) => {
        if (!err) {
          resolve(fs.createWriteStream(output, { flags: 'a' }));
        } else {
          process.stderr.write("Output file doesn't exist!\n");
          process.exit(1);
        }
      });
    });
  }

  return process.stdout;
};

module.exports = {
  writeText,
};
