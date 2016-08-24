'use strict';

var gulp = require('gulp');

gulp.task('build', ['vendors', 'pug:prod', 'stylus:prod', 'scripts:prod', 'assets']);
