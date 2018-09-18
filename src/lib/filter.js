'use strict';
const fs = require('fs');
const bitmapParser = require('./bitmap-parser');
const filter = module.exports = {};

console.log(parsed.colorTable.readUInt32LE(0));

const parsed =  bitmapParser.parse(buffer);

// make things have a red shade
filter.red = (buffer) => {
  for (let i = 0; i < parsed.colorTable.length; i += 4) {
    parsed.colorTable[i + 1] = (i + 1) + (255 - (i + 1));
    parsed.colorTable[i + 2] = (i + 2) ;
    parsed.colorTable[i + 3] = (i + 3) ;
  }
};

// make things white
filter.white = (buffer) => {
  for (let i = 0; i < parsed.colorTable.length; i += 4) {

    parsed.colorTable[i + 1] = (i + 1) + (255 - (i + 1));
    parsed.colorTable[i + 2] = (i + 2) + (255 - (i + 2));
    parsed.colorTable[i + 3] = (i + 3) + (255 - (i + 3));
  }
};

// make things have inverted colors.
filter.invert = (buffer) => {
  for (let i = 0; i < parsed.colorTable.length; i += 4) {

    parsed.colorTable[i + 1] = (i + 1) % 255;
    parsed.colorTable[i + 2] = (i + 2) % 255;
    parsed.colorTable[i + 3] = (i + 3) % 255;
  }
};



