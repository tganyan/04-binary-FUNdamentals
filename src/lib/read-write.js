'use strict';

const fs = require('fs');
const bitmapParser = require('./bitmap-parser');
const readWriter = module.exports = {};

const baseImg = process.argv[2];
const generatedImg = process.argv[3];
const transform = process.argv[4];

readWriter.generate = (baseImg, generatedImg, transform) => {
  fs.readFile(`../data/${baseImg}`, (error, buffer) => {
    if (error) {
      throw error;
    }

    const parsedBitmap = bitmapParser.parse(buffer);

    fs.writeFile(`../data/${generatedImg}`, buffer, (error) => {
      if (error) {
        throw error;
      }
      return transform(parsedBitmap);
    });

  });
};
