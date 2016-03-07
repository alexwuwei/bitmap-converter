'use strict';

var gulp = require('gulp'),
  mocha = require('gulp-mocha'),
  lint = require('gulp-eslint'),
  // chai = require('gulp-chai'),
  paths = ['lib/*.js', 'test/*.js', 'index.js', 'gulpfile.js'];

gulp.task('eslint', function(){
  return gulp.src(paths)
    .pipe(lint())
  .pipe(lint.formatEach('compact', process.stderr));
});

gulp.task('mocha', function(){
  return gulp.src('test/*.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watch', function(){
  gulp.watch(paths, ['mocha', 'eslint']);
});

gulp.task('default', ['eslint', 'mocha', 'watch']);
