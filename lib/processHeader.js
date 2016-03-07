'use strict';
var os = require('os');
var leOrBe = os.endianness();
var simpleBitmapData = {};

module.exports = function(bitmapImage) {
  if (leOrBe === 'LE') {
    simpleBitmapData.headField = bitmapImage.toString('ascii', 0, 2);
    simpleBitmapData.size = bitmapImage.readUInt32LE(2);
    simpleBitmapData.pixelArrayStartLocation = bitmapImage.readUInt32LE(10);
    simpleBitmapData.paletteColors = bitmapImage.readUInt32LE(46);
    simpleBitmapData.height = bitmapImage.readUInt32LE(18);
    simpleBitmapData.width = bitmapImage.readUInt32LE(22);
    return simpleBitmapData;
  } else {
    simpleBitmapData.headField = bitmapImage.toString('ascii', 0, 2);
    simpleBitmapData.size = bitmapImage.readUInt32BE(2);
    simpleBitmapData.pixelArrayStartLocation = bitmapImage.readUInt32BE(10);
    simpleBitmapData.paletteColors = bitmapImage.readUInt32BE(46);
    simpleBitmapData.height = bitmapImage.readUInt32BE(18);
    simpleBitmapData.width = bitmapImage.readUInt32BE(22);
    return simpleBitmapData;
  }
};
