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
  var p;
  gulp.watch(['Gulpfile.js', 'package.json', 'tasks/*.js'], function () {
    if(p) {
      p.kill();
    }
    p = spawn('gulp', ['default'], {stdio: 'inherit'});
  });
});

gulp.task('serve', ['watch:gulp', 'browser-sync'], function() {
  gulp.watch('src/modules/**/*.{gif,jpg,png,svg}', ['assets']).on('change', browserSync.reload);
  gulp.watch('src/**/*.pug', ['pug']).on('change', browserSync.reload);
  gulp.watch('src/**/*.styl', ['stylus']).on('change', browserSync.reload);
  gulp.watch('src/**/*.js', ['scripts']).on('change', browserSync.reload);
  gulp.watch(['dist/**/*'], browserSync.reload);
});
