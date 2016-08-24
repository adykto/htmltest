'use strict';

var gulp = require('gulp');

gulp.task('assets', function() {
    gulp.src([
      'src/modules/*/*.png',
      'src/modules/*/*.svg'
    ])
        .pipe(gulp.dest('./dist/images'));

    gulp.src([
        'bower_components/roboto-fontface/fonts/**',
        'bower_components/slick-carousel/slick/fonts/**'
    ])
        .pipe(gulp.dest('dist/fonts/'));
});
