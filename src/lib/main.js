'use strict';
const fs = require('fs');
const bitmapParser = require('./bitmap-parser');

const commandOne = process.argv[2];
const commandTwo = process.argv[3];
const commandThree = process.argv[4];
const commandFour = process.argv[5];

console.log(`First: ${commandOne}, Second: ${commandTwo}, Third: ${commandThree}, Fourth: ${commandFour}`);


// fs.readFile('../data/house.bmp', (error, buffer) => {
//   if (error){
//     throw error;
//   }
//   //console.log(buffer.slice(54));
//
//   const parsed =  bitmapParser.parse(buffer);
//   console.log(parsed.colorTable.readUInt32LE(4));
// });
