'use strict';
const fs = require('fs');
const bitmapParser = require('./bitmap-parser');

fs.readFile('../data/house.bmp', (error, buffer) => {
  if (error){
    throw error;
  }
  //console.log(buffer.slice(54));

  const parsed =  bitmapParser.parse(buffer);
  console.log(parsed.colorTable.readUInt32LE(0));
});
