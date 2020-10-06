const parseArgs = require('minimist');

const args = parseArgs(process.argv.slice(2));

let shift;
let input;
let output;
let action;

Object.keys(args).forEach((argItem) => {
  switch (argItem) {
    case 's':
    case 'shift':
      shift = args[argItem];
      break;

    case 'i':
    case 'input':
      input = args[argItem];
      break;

    case 'o':
    case 'output':
      output = args[argItem];
      break;

    case 'a':
    case 'action':
      action = args[argItem];
      break;

    default:
      break;
  }
});

module.exports = {
  shift,
  input,
  output,
  action,
};
