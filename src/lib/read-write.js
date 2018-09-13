'use strict';

const fs = require('fs');
const bitmapParser = require('./bitmap-parser');
const readWriter = module.exports = {};


fs.readFile('../data/house.bmp', (error, buffer) => {
    if (error) {
        throw error;
    }
    const parsedBitmap = bitmapParser.parse(buffer);
    fs.writeFile('../data/house1.bmp', buffer, (error) => {
        if (error) {
            throw error;
        }
    })
});
