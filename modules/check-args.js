const { stderr } = process;

function checkArgs({ action, shift }) {
  if (!action) {
    stderr.write('Action flag is empty!\n');
    process.exit(1);
  }

  if (action !== 'encode' && action !== 'decode') {
    stderr.write('Action value is incorrect! Must be "encode" or "decode".\n');
    process.exit(1);
  }

  if (!shift) {
    stderr.write('Shift flag is empty!\n');
    process.exit(1);
  }

  if (typeof shift !== 'number' || !Number.isInteger(shift)) {
    stderr.write('Shift value is incorrect! Must be a positive integer.\n');
    process.exit(1);
  }
}

module.exports = {
  checkArgs,
};
