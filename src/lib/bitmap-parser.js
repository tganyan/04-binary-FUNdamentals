'use strict';

const bitmapParser = module.exports = {};

bitmapParser.parse = (buffer) => {
    const parsedBitmap = {};
    const FILE_SIZE_OFFSET = 2;
    const HEIGHT_OFFSET = 22;
    const COLOR_TABLE_OFFSET = 54;
    const COLOR_TABLE_SIZE = 54 + 256; // we Hella don't know this
    parsedBitmap.type = buffer.toString('utf8', 0, 2);
    parsedBitmap.fileSizeInBytes = buffer.readInt32LE(FILE_SIZE_OFFSET);
    parsedBitmap.height = buffer.readInt32LE(HEIGHT_OFFSET);
    parsedBitmap.colorTable = buffer.slice(COLOR_TABLE_OFFSET, COLOR_TABLE_SIZE);

    return parsedBitmap;
};
