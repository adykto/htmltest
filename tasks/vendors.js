'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    stylus = require('gulp-stylus'),
    uglify = require('gulp-uglify'),
    jquery = require('gulp-jquery');

gulp.task('jquery', function () {
    return jquery.src({
        release: 2,
        flags: [
        //    '-deprecated',
        //    '-event/alias',
            '-ajax',
            '-wrap',
            '-exports/amd'
        ]
    })
        .pipe(gulp.dest('node_modules/.tmp/'));
});

gulp.task('vendors', ['jquery'], function() {
    gulp.src([
        'node_modules/.tmp/jquery.custom.js',
        'node_modules/bootstrap-styl/js/carousel.js',
        'node_modules/bootstrap-styl/js/collapse.js',
        'node_modules/bootstrap-styl/js/dropdown.js',
        'node_modules/bootstrap-styl/js/transition.js',
        'node_modules/bootstrap-styl/js/scrollspy.js',
        'node_modules/scrollreveal/src/scrollreveal.js'
        ])
        .pipe(concat('vendors.min.js'))
        .pipe(uglify({outSourceMap: false}))
        .pipe(gulp.dest('dist/javascript/'));
});
