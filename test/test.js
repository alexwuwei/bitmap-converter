'use strict';

var expect = require('chai').expect;
var fs = require('fs')
var processHeader = require(__dirname + '/../lib/processHeader.js');
var colorHandler = require(__dirname + '/../lib/colorHandler.js')

describe('processHeaderTesting', function() {
  it('should return an object with all the properties of the bitmap header', function(done){
    var bitmapImage = fs.readFileSync(__dirname + '/../img/non-palette-bitmap.bmp');
    var processHeader = processHeader(bitmapImage);
    console.log('bitmap header stuff is: ');
    console.dir(processHeader);
      expect(processHeader).to.have.property('headField');
      expect(processHeader).to.have.property('size');
      expect(processHeader).to.have.property('pixelArrayStartLocation');
      expect(processHeader).to.have.property('paletteColors');
      expect(processHeader).to.have.property('height');
      expect(processHeader).to.have.property('width');
      done()
    });
  });

describe('colorHandlerInvertTesting', function(){
  it('should invert colors', function() {
    var input = {
      r: 10,
      g: 1,
      b: 0,
      a: 255
    };
    var expectedOutput = {
      r: 245,
      g: 254,
      b: 255,
      a: 0
    };
    expect(colorHandler.invertColors(input)).to.eql(expectedOutput);
  });
});
