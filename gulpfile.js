'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function () {
  return gulp.src('css/style.scss')
  .pipe(sourcemaps.init())
  .pipe(sass()

  .on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(autoprefixer({
             browsers: ['last 2 versions'],
             cascade: false
         }))
  .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('css/style.scss', ['sass']);
  gulp.watch("*.html").on('change', browserSync.reload);
});


// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
