'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    stylus = require('gulp-stylus'),
    uglify = require('gulp-uglify');

gulp.task('vendors', function() {
    gulp.src([
            'bower_components/jquery/dist/jquery.js',
            'bower_components/modernizer/modernizr.js',
            'bower_components/slick-carousel/slick/slick.js'
        ])
        .pipe(concat('vendors.min.js'))
        .pipe(uglify({outSourceMap: true}))
        .pipe(gulp.dest('dist/javascript/'));
});
