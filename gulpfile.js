
"use strict";

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    broswerSync = require('browser-sync').create(),
    karma = require('karma');

gulp.task('scripts:compile', 
  () => gulp.src("./src/**/*.js")
    .pipe($.babel())
    .pipe(gulp.dest("./build")));

gulp.task('watch:scripts:compile',
  gulp.series('scripts:compile', 
    () => gulp.watch(['./src/**/*.js'], gulp.series('scripts:compile'))));


// browser
gulp.task('examples', () => { 
  broswerSync.init({
    notify : true,
    port : 8080,
    server: {
      baseDir: ["examples"],
      routes: {
        '/build' : 'build'
      }
    }
  });
  
  gulp.watch('./examples/index.html', broswerSync.reload);
})

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