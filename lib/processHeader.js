'use strict';

module.exports = function(bitmapImage) {
  var simpleBitmapData = {};
  simpleBitmapData.headField = bitmapImage.toString('ascii', 0, 2);
  simpleBitmapData.size = bitmapImage.readUInt32LE(2);
  simpleBitmapData.pixelArrayStartLocation = bitmapImage.readUInt32LE(10);
  simpleBitmapData.paletteColors = bitmapImage.readUInt32LE(46);
  simpleBitmapData.height = bitmapImage.readUInt32LE(18);
  simpleBitmapData.width = bitmapImage.readUInt32LE(22);
  return simpleBitmapData;
};
