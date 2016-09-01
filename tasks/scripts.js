'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify');

gulp.task('scripts', function() {
    gulp.src([
        'node_modules/bootstrap-styl/js/carousel.js',
        'node_modules/bootstrap-styl/js/collapse.js',
        'node_modules/bootstrap-styl/js/dropdown.js',
        'node_modules/bootstrap-styl/js/transition.js',
        'node_modules/bootstrap-styl/js/scrollspy.js',
        'src/_core/app.js',
        'src/_core/debug.js',
        'src/modules/*.js'
    ])
        .pipe(concat('main.min.js'))
        .pipe(jshint({
            jshintrc: '.jshintrc'
        }))
        .pipe(gulp.dest('./dist/javascript/'));
});

gulp.task('scripts:prod', function() {
    gulp.src(['src/_core/app.js', 'src/modules/*.js'])
        .pipe(concat('main.min.js'))
        .pipe(uglify({outSourceMap: false}))
        .pipe(gulp.dest('./dist/javascript/'));
});
