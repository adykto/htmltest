'use strict';

var gulp = require('gulp');

gulp.task('default', ['vendors', 'pug:prod', 'stylus:prod', 'scripts:prod', 'assets']);
