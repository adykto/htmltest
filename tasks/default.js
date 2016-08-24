'use strict';

var gulp = require('gulp');

gulp.task('default', ['vendors', 'pug', 'stylus', 'scripts', 'assets'], function() {
    gulp.watch(['src/modules/**/*.png', 'src/modules/**/*.svg'], ['assets']);

    gulp.watch('src/**/*.pug', ['pug']);
    gulp.watch('src/**/*.styl', ['stylus']);
    gulp.watch('src/**/*.js', ['scripts']);
});
