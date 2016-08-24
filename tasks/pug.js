'use strict';

var gulp = require('gulp'),
    pug = require('gulp-pug'),
    fs = require('fs'),
    replace = require('gulp-replace-path');

gulp.task('pug', function() {
    gulp.src('src/modules/*.pug')
        .pipe(pug({
          pretty: true,
          locals: {
            package: JSON.parse( fs.readFileSync('./package.json', { encoding: 'utf8' }) )
          }
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('pug:prod', function() {
    gulp.src('src/modules/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('./dist/'));
});
