
"use strict";

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    karma = require('karma');

gulp.task('scripts:compile', 
  () => gulp.src("./src/**/*.js")
    .pipe($.babel())
    .pipe(gulp.dest("./build")));

gulp.task('watch:scripts:compile',
  gulp.series('scripts:compile', 
    () => gulp.watch(['./src/**/*.js'], gulp.series('scripts:compile'))));

// testing
gulp.task('test:spec', () => {
  var svr = new karma.Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false,
    autoWatch: true
  });
  
  svr.start();
});

gulp.task('watch:test:spec', 
  gulp.series('test:spec', 
    () => gulp.watch(['./build/**/*.js'], gulp.series('test:spec'))));