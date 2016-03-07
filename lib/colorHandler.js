'use strict';

var colorHandler = {};

colorHandler.readColors = function(i, bitmapImage) {
  var colorHandler = {};
  colorHandler.r = bitmapImage.readUInt8(i);
  colorHandler.b = bitmapImage.readUInt8(i + 1);
  colorHandler.g = bitmapImage.readUInt8(i + 2);
  colorHandler.a = bitmapImage.readUInt8(i + 3);
  return colorHandler;
};

colorHandler.writeColors = function(i, bitmapImage, colorHandlerObj) {
  bitmapImage.writeUInt8(colorHandlerObj.r, i);
  bitmapImage.writeUInt8(colorHandlerObj.b, i + 1);
  bitmapImage.writeUInt8(colorHandlerObj.g, i + 2);
  bitmapImage.writeUInt8(colorHandlerObj.a, i + 3);
}

colorHandler.invertColors = function(colorHandlerObj) {
  var colorsList = ['r', 'g', 'b', 'a'];
  colorsList.forEach(function(current) {
    var thisColor = colorHandlerObj[current];
    colorHandlerObj[current] = 255 - thisColor;
  });
  return colorHandlerObj
}

colorHandler.grayscaleColors = function(colorHandlerObj) {
  var colorsList = ['r', 'g', 'b', 'a'];
  colorsList.forEach(function(current){
    var thisColor = colorHandlerObj[current];
    colorHandlerObj[current] = thisColor * 0.7;
  });
  return colorHandlerObj;
}

colorHandler.bluescaleColors = function(colorHandlerObj) {
  var blueColor = ['b'];
  blueColor.forEach(function(current) {
    var thisColor = colorHandlerObj[current];
    colorHandlerObj[current] = thisColor * 0.7;
  });
  return colorHandlerObj
}



module.exports = colorHandler;
