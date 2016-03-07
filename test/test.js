'use strict';

var expect = require('chai').expect;
var fs = require('fs');
var processHeader = require(__dirname + '/../lib/processHeader.js');
var colorHandler = require(__dirname + '/../lib/colorHandler.js');

describe('processHeaderTesting', function() {
  it('should return an object with all the properties of the bitmap header', function(done){
    var bitmapImage = fs.readFileSync(__dirname + '/../img/non-palette-bitmap.bmp');
    var processHeaderData = processHeader(bitmapImage);
    console.log('bitmap header stuff is: ');
    console.dir(processHeader);
    expect(processHeaderData).to.have.property('headField');
    expect(processHeaderData).to.have.property('size');
    expect(processHeaderData).to.have.property('pixelArrayStartLocation');
    expect(processHeaderData).to.have.property('paletteColors');
    expect(processHeaderData).to.have.property('height');
    expect(processHeaderData).to.have.property('width');
    done();
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

describe('colorHandlerGrayscaleTesting', function(){
  it('should grayscale colors', function() {
    var input = {
      r: 10,
      g: 1,
      b: 0,
      a: 255
    };
    var expectedOutput = {
      r: input.r * 0.7,
      g: input.g * 0.7,
      b: input.b * 0.7,
      a: input.a * 0.7
    };
    expect(colorHandler.grayscaleColors(input)).to.eql(expectedOutput);
  });
});

describe('colorHandlerBluescaleTesting', function(){
  it('should bluescale colors', function() {
    var input = {
      r: 10,
      g: 1,
      b: 0,
      a: 255
    };
    var expectedOutput = {
      r: input.r,
      g: input.g,
      b: input.b * 0.7,
      a: input.a
    };
    expect(colorHandler.bluescaleColors(input)).to.eql(expectedOutput);
  });
});

describe('transform testing for inverting non palette bitmap', function(){
  it('should make the transform object equal to the invert non palette function', function () {

  });
});
