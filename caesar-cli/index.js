#!/usr/bin/env node
const args = require('./modules/parse-args');

require('./modules/check-args').checkArgs(args);
require('./modules/make-encode-decode').makeEncodeDecode();
