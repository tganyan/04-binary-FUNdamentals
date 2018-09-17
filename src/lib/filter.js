'use strict';
const fs = require('fs');
const bitmapParser = require('./bitmap-parser');
const filter = module.exports = {};

console.log(parsed.colorTable.readUInt32LE(0));

const parsed =  bitmapParser.parse(buffer);

// make things red
filter.red = (buffer) => {
  for (let i = 0; i < parsed.colorTable.length; i += 4) {

    buffer[i + 1] = (i + 1) + (255 - (i + 1)) ; //! Vinicio - Red
    buffer[i + 2] = i ; //! Vinicio - Green
    buffer[i + 3] = i ; //! Vinicio  - Blue
  }
};


// make things white
filter.white = (buffer) => {
  for (let i = 0; i < parsed.colorTable.length; i += 4) {

    buffer[i + 1] = (i + 1) + (255 - (i + 1)); //! Vinicio - Red
    buffer[i + 2] = (i + 2) + (255 - (i + 2)); //! Vinicio - Green
    buffer[i + 3] = (i + 3) + (255 - (i + 3)); //! Vinicio  - Blue
  }
};



