// 'use strict';
// var fs = require('fs');
// var os = require('os');
// var processHeader = require(__dirname + '/lib/processHeader.js')
// var colorHandler = require(__dirname + '/lib/colorHandler.js')
//
// var leOrBe = os.endianness();
// console.log('OS endianness is: ' + leOrBe);
//
// var bitmapImage = fs.readFileSync(__dirname + '/img/' + process.argv[2]);
// var bitmapHeadData = processHeader(bitmapImage);
//
//
// // console.log('first color is: ' + bitmap[54]);
// // console.dir(bitmapData);
//
// for (var i = simpleBitmapData.pixelArrayStartLocation; i < simpleBitmapData.size - 4; i += 4) {
//   var invertedObject = colorHandler.invertColors(colorHandler.readColors(i, bitmapImage));
//   colorHandler.writeColors(i, bitmapImage, invertedObject);
//   colorHandler.readColors(i, bitmapImage);
// }
//
// fs.writeFileSync(__dirname + '/img-output/' + process.argv[2], bitmap);
