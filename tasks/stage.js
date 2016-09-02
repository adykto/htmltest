'use strict';

var gulp = require('gulp');

gulp.task('stage', ['vendors', 'pug:stg', 'stylus:prod', 'scripts:prod', 'assets']);
