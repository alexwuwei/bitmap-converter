'use strict';
var fs = require('fs');
var os = require('os');
var processHeader = require(__dirname + '/lib/processHeader.js')
var colorHandler = require(__dirname + '/lib/colorHandler.js')

var leOrBe = os.endianness();
console.log('OS endianness is: ' + leOrBe);

var bitmapImage = fs.readFileSync(__dirname + '/img/' + process.argv[2]);
var bitmapHeadData = processHeader(bitmapImage);

var argument = process.argv[3];
var bitmapName = process.argv[2];

var transform;

if (argument === 'invert' && bitmapName === 'non-palette-bitmap.bmp') {
  transform = inverted;
} else if (argument === 'grayscale' && bitmapName === 'non-palette-bitmap.bmp') {
  transform = grayscale;
} else if (argument === 'bluescale' && bitmapName === 'non-palette-bitmap.bmp') {
  transform = bluescale;
} else if (argument === 'invert' && bitmapName === 'palette-bitmap.bmp') {
  transform = invertedPalette;
} else if (argument === 'grayscale' && bitmapName === 'palette-bitmap.bmp') {
  transform = grayscalePalette;
} else if (argument === 'bluescale' && bitmapName === 'palette-bitmap.bmp') {
  transform = bluescalePalette;
}

function inverted () {
  for (var i = bitmapHeadData.pixelArrayStartLocation; i < bitmapHeadData.size - 4; i += 4) {
  var invertedObject = colorHandler.invertColors(colorHandler.readColors(i, bitmapImage));
  colorHandler.writeColors(i, bitmapImage, invertedObject);
  colorHandler.readColors(i, bitmapImage);
};
}

function grayscale () {
  for (var i = bitmapHeadData.pixelArrayStartLocation; i < bitmapHeadData.size - 4; i += 4) {
  var invertedObject = colorHandler.grayscaleColors(colorHandler.readColors(i, bitmapImage));
  colorHandler.writeColors(i, bitmapImage, invertedObject);
  colorHandler.readColors(i, bitmapImage);
};
}

function bluescale () {
  for (var i = bitmapHeadData.pixelArrayStartLocation; i < bitmapHeadData.size - 4; i += 4) {
  var invertedObject = colorHandler.bluescaleColors(colorHandler.readColors(i, bitmapImage));
  colorHandler.writeColors(i, bitmapImage, invertedObject);
  colorHandler.readColors(i, bitmapImage);
};
}

function invertedPalette () {
  for (var i = 54; i < bitmapHeadData.pixelArrayStartLocation; i += 4) {
  var invertedObject = colorHandler.invertColors(colorHandler.readColors(i, bitmapImage));
  colorHandler.writeColors(i, bitmapImage, invertedObject);
  colorHandler.readColors(i, bitmapImage);
};
}

function grayscalePalette () {
  for (var i = 54; i < bitmapHeadData.pixelArrayStartLocation; i += 4) {
  var invertedObject = colorHandler.grayscaleColors(colorHandler.readColors(i, bitmapImage));
  colorHandler.writeColors(i, bitmapImage, invertedObject);
  colorHandler.readColors(i, bitmapImage);
};
}

function bluescalePalette () {
  for (var i = 54; i < bitmapHeadData.pixelArrayStartLocation; i += 4) {
  var invertedObject = colorHandler.bluescaleColors(colorHandler.readColors(i, bitmapImage));
  colorHandler.writeColors(i, bitmapImage, invertedObject);
  colorHandler.readColors(i, bitmapImage);
};
}

transform();

fs.writeFileSync(__dirname + '/img-output/' + process.argv[2], bitmapImage);
