'use strict';
const fs = require('fs');
const bitmapParser = require('./bitmap-parser');

let r = parseInt('ff', 16);

// for (let i = 0; i < buffer.length / 3; i + = 3) {
//
//   buffer[i] = i % 255; //! Vinicio - Red
//   buffer[i + 1] = i % 255; //! Vinicio - Green
//   buffer[i + 2] = i % 255; //! Vinicio  - Blue
//   buffer[i] = 255; //! Vinicio - Red
//   buffer[i + 1] = 0; //! Vinicio - Green
//   buffer[i + 2] = 0; //! Vinicio  - Blue
// }
// console.log(buffer.toString());
// });