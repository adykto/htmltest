'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify');

gulp.task('scripts', function() {
    gulp.src(['src/_core/app.js', 'src/modules/*.js'])
        .pipe(jshint({
          jshintrc: '.jshintrc'
        }))
        .pipe(concat('main.min.js'))
        .pipe(uglify({outSourceMap: true}))
        .pipe(gulp.dest('./dist/javascript/'));
});

gulp.task('scripts:prod', function() {
    gulp.src(['src/_core/app.js', 'src/modules/*.js'])
        .pipe(concat('main.min.js'))
        .pipe(uglify({outSourceMap: false}))
        .pipe(gulp.dest('./dist/javascript/'));
});
