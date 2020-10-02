const stream = require('stream');
const util = require('util');
const { parseText } = require('./parse-text');
const { TransformText } = require('./transform-text');
const { writeText } = require('./write-text');
const { action } = require('./parse-args');

const pipeline = util.promisify(stream.pipeline);
const transformText = new TransformText();

async function makeEncodeDecode() {
  pipeline(
    await parseText(),
    transformText,
    await writeText(),
  ).then(() => {
    console.log(`Successfully ${action}d!`);
  }).catch(({ code, path }) => {
    if (code === 'EACCES') {
      process.stderr.write(`Access is denied to "${path}"\n`);
      process.exit(1);
    }
  });
}

module.exports = {
  makeEncodeDecode,
};
