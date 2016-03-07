'use strict';

var gulp = require('gulp'),
  lint = require('gulp-eslint'),
  mocha = require('gulp-mocha'),
  chai = require('gulp-chai'),
  paths = ['*.js', 'lib/*.js', 'test/*.js', 'index.js', 'gulpfile.js'];

gulp.task('eslint', function(){
  return gulp.src(paths)
    .pipe(lint())
  .pipe(lint.formatEach('compact', process.stderr));
});

gulp.task('mocha', function(){
  return gulp.src(paths, {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watch', function(){
  gulp.watch(paths, ['mocha', 'eslint']);
});

gulp.task('default', ['eslint', 'mocha', 'watch']);
