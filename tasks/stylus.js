'use strict';

var gulp = require('gulp'),
    bootstrap = require('bootstrap-styl'),
    concat = require('gulp-concat'),
    stylus = require('gulp-stylus'),
    uglify = require('gulp-uglify');

gulp.task('stylus', function(){
    gulp.src([
        'bower_components/roboto-fontface/css/roboto/roboto-fontface.css',
        'src/_core/main.styl',
        'src/modules/**/*.styl'
    ])
        .pipe(stylus({ use: bootstrap(), compress: false }))
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest('./dist/stylesheets'));
});

gulp.task('stylus:prod', function(){
    gulp.src([
        'bower_components/roboto-fontface/css/roboto/roboto-fontface.css',
        'src/_core/main.styl',
        'src/modules/**/*.styl'
    ])
        .pipe(stylus({ use: bootstrap(), compress: true }))
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest('./dist/stylesheets'));
});
