#!/usr/bin/env node

// Set options as a parameter, environment variable, or rc file.
// eslint-disable-next-line no-global-assign
require = require("esm")(module/* , options */)
// module.exports = require("./main.js")
require('./main').main(process.argv);
