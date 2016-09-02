'use strict';

var gulp = require('gulp');

gulp.task('assets', function() {
    gulp.src([
      'src/modules/*/*.gif',
      'src/modules/*/*.jpg',
      'src/modules/*/*.png',
      'src/modules/*/*.svg'
    ])
        .pipe(gulp.dest('./dist/images'));

    gulp.src([
        'src/resources/**'
    ])
        .pipe(gulp.dest('./dist/'));

    gulp.src([
        'bower_components/roboto-fontface/fonts/**'])
        .pipe(gulp.dest('dist/fonts/'));
});
