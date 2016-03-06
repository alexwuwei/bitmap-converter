'use strict';
var fs = require('fs');
var os = require('os');

var leOrBe = os.endianness();
console.log('OS endianness is: ' + leOrBe);

var bitmap = fs.readFileSync('../img/palette-bitmap.bmp');
var bitmapData = {};

bitmapData.headField = bitmap.toString('ascii', 0, 2);
bitmapData.size = bitmap.readUInt32LE(2);
bitmapData.pixelArrayStart = bitmap.readUInt32LE(10);
bitmapData.paletteColors = bitmap.readUInt32LE(46);

console.log('first color is: ' + bitmap[54]);
console.dir(bitmapData);

for (var i = bitmapData.pixelArrayStart; i < bitmapData.size - 4; i += 4) {

}

fs.writeFileSync('../img-output/newbitmap.bmp', bitmap)
