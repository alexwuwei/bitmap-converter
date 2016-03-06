'use strict';
var fs = require('fs');
var os = require('os');

var leOrBe = os.endianness();
console.log('OS endianness is: ' + leOrBe);


// console.log('first color is: ' + bitmap[54]);
// console.dir(bitmapData);

function fuckWithColors() {
  var simpleBitmap = fs.readFileSync('../img/non-palette-bitmap.bmp');
  var simpleBitmapData = {};
  simpleBitmapData.headField = simpleBitmap.toString('ascii', 0, 2);
  simpleBitmapData.size = simpleBitmap.readUInt32LE(2);
  simpleBitmapData.pixelArrayStartLocation = simpleBitmap.readUInt32LE(10);
  simpleBitmapData.paletteColors = simpleBitmap.readUInt32LE(46);
for (var i = simpleBitmapData.pixelArrayStartLocation; i < simpleBitmapData.size - 4; i += 4) {
  var pixelValue = simpleBitmap.readUInt8(i);
  simpleBitmap.writeUInt8(16, i);
  simpleBitmap.writeUInt8(16, i + 1);
  simpleBitmap.writeUInt8(16, i + 2);
  simpleBitmap.writeUInt8(16, i + 3);
};
fs.writeFileSync('../img-output/newbitmap.bmp', simpleBitmap)
}

function invertColors() {
  var bitmap = fs.readFileSync('../img/non-palette-bitmap.bmp');
  var bitmapData = {};
  bitmapData.headField = bitmap.toString('ascii', 0, 2);
  bitmapData.size = bitmap.readUInt32LE(2);
  bitmapData.pixelArrayStartLocation = bitmap.readUInt32LE(10);
  bitmapData.paletteColors = bitmap.readUInt32LE(46);
  for (var i = bitmapData.pixelArrayStartLocation; i < bitmapData.size - 4; i += 4) {
    var pixelValue = bitmap.readUInt8(i);
    bitmap.writeUInt8(255 - pixelValue, i);
    bitmap.writeUInt8(255 - pixelValue, i + 1);
    bitmap.writeUInt8(255 - pixelValue, i + 2);
    bitmap.writeUInt8(255 - pixelValue, i + 3);
  };
  fs.writeFileSync('../img-output/invertbitmap.bmp', bitmap)
}

invertColors();
fuckWithColors();
