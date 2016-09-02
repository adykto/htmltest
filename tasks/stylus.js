'use strict';

var gulp = require('gulp'),
    bootstrap = require('bootstrap-styl'),
    concat = require('gulp-concat'),
    stylus = require('gulp-stylus'),
    sourcemaps = require('gulp-sourcemaps'),
    uncss = require('gulp-uncss'),
    nano = require('gulp-cssnano');

gulp.task('stylus', function(){
    gulp.src([
        'bower_components/roboto-fontface/css/roboto/roboto-fontface.css',
        'src/_core/main.styl'
    ])
        .pipe(sourcemaps.init())
        .pipe(stylus({ use: bootstrap(), compress: false }))
        .pipe(concat('main.min.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/stylesheets'));
});

gulp.task('stylus:prod', function(){
    gulp.src([
        'bower_components/roboto-fontface/css/roboto/roboto-fontface.css',
        'src/_core/main.styl'
    ])
        .pipe(stylus({ use: bootstrap(), compress: true }))
        // .pipe(uncss({
        //     ignored: ['#menu', '#tour', '.navbar', '.navbar-toggle', '.navbar-collapse'],
        //     html: ['dist/*.html']
        // }))
        .pipe(nano())
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest('./dist/stylesheets'));
});
