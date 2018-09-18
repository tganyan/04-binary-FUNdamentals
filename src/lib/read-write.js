'use strict';

const fs = require('fs');
const bitmapParser = require('./bitmap-parser');
const filter = require('./filter');
const readWriter = module.exports = {};


const baseImg = process.argv[2];
const generatedImg = process.argv[3];
const transform = process.argv[4];

readWriter.generate = (baseImg, generatedImg, transform) => {
  fs.readFile(`../data/${baseImg}`, (error, buffer) => {
    if (error) {
      throw error;
    }

    fs.writeFile(`../data/${generatedImg}`, buffer, (error) => {
      if (error) {
        throw error;
      }
      filter.transform(buffer);
    });

  });
};

