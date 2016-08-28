'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    spawn = require('child_process').spawn;

gulp.task('browser-sync', function() {
  browserSync({
    server: {
       baseDir: './dist'
    }
  });
});

gulp.task('watch:gulp', function() {
  var process;

  gulp.watch(['Gulpfile.js', 'package.json', 'tasks/*.js'], function () {
    if(process) {
        process.kill();
    }

    process = spawn('gulp', {stdio: 'inherit'});
  });
});

gulp.task('serve', ['watch:gulp', 'browser-sync'], function() {
  gulp.watch('src/modules/**/*.{gif,jpg,png,svg}', ['assets']);
  gulp.watch('src/**/*.pug', ['pug']);
  gulp.watch('src/**/*.styl', ['stylus']);
  gulp.watch('src/**/*.js', ['scripts']);
  gulp.watch(['dist/**/*'], browserSync.reload);
});
