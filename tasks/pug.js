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
                env: 'DEV',
                package: JSON.parse( fs.readFileSync('./package.json', { encoding: 'utf8' }) )
            }
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('pug:stg', function() {
    gulp.src('src/modules/*.pug')
        .pipe(pug({
            pretty: true,
            locals: {
                env: 'STG',
                package: JSON.parse( fs.readFileSync('./package.json', { encoding: 'utf8' }) )
            }
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('pug:prod', function() {
    gulp.src('src/modules/*.pug')
        .pipe(pug({
            pretty: false,
            locals: {
                env: 'PROD',
                package: JSON.parse( fs.readFileSync('./package.json', { encoding: 'utf8' }) )
            }
        }))
        .pipe(gulp.dest('./dist/'));
});
