'use strict';
var fs = require('fs');
var os = require('os');
var processHeader = require(__dirname + '/lib/processHeader.js')
var colorHandler = require(__dirname + '/lib/colorHandler.js')

var leOrBe = os.endianness();
console.log('OS endianness is: ' + leOrBe);

var bitmapImage = fs.readFileSync(__dirname + '/img/' + process.argv[2]);
var bitmapHeadData = processHeader(bitmapImage);


for (var i = bitmapHeadData.pixelArrayStartLocation; i < bitmapHeadData.size - 4; i += 4) {
  var invertedObject = colorHandler.invertColors(colorHandler.readColors(i, bitmapImage));
  colorHandler.writeColors(i, bitmapImage, invertedObject);
  colorHandler.readColors(i, bitmapImage);
}

// var writeFiles = function(bitmap) {
//   fs.writeFileSync(__dirname + '/img-output/' + process.argv[2], bitmap);
// }

fs.writeFileSync(__dirname + '/img-output/' + process.argv[2], bitmapImage);
