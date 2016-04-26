
"use strict";

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();
    
gulp.task('scripts:compile',
    () => gulp.src("./src/**/*.js")
        .pipe($.babel())
        .pipe(gulp.dest("./build")));

// testing
