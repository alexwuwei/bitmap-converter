'use strict';
var fs = require('fs');

var bitmap = fs.readFileSync('../img/palette-bitmap.bmp');
var bitmapData = {};

bitmapData.headField = bitmap.toString('ascii', 0, 2);
bitmapData.size = bitmap.readUInt32LE(2);
bitmapData.pixelArrayStart = bitmap.readUInt32LE(10);
bitmapData.paletteColors = bitmap.readUInt32LE(46);

console.log('first color is: ' + bitmap[54]);
console.dir(bitmapData);
