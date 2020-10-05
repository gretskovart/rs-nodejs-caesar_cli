const { Transform } = require('stream');
const { action, shift } = require('./parse-args');

class TransformText extends Transform {
  constructor(options) {
    super(options);

    this.abcLength = 26;
    this.charCodeA = 97;
    this.charCodeZ = 122;
    this.charCodeCapitalA = 65;
    this.charCodeCapitalZ = 90;
  }

  getCharShift(charCode) {
    let charShift = 0;

    if (this.charCodeCapitalA && charCode <= this.charCodeCapitalZ) {
      charShift = this.charCodeCapitalA;
    } else if (charCode >= this.charCodeA && charCode <= this.charCodeZ) {
      charShift = this.charCodeA;
    }

    return charShift;
  }

  // eslint-disable-next-line no-underscore-dangle
  _transform(chunk, encoding, callback) {
    try {
      const currentString = chunk.toString('utf8');
      let finalString = '';

      // eslint-disable-next-line no-restricted-syntax
      for (const it of currentString) {
        if (it.match(/[a-zA-Z]/i)) {
          const charCode = it.charCodeAt();
          const charShift = this.getCharShift(charCode);
          const shiftAction = action === 'encode' ? shift : -shift + this.abcLength;
          const finalCharCode = ((charCode - charShift + shiftAction) % this.abcLength) + charShift;

          finalString += String.fromCharCode(finalCharCode);
        } else {
          finalString += it;
        }
      }

      callback(null, finalString);
    } catch (err) {
      callback(err);
    }
  }
}

module.exports = {
  TransformText,
};
