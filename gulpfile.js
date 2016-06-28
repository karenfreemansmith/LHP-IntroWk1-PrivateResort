var gulp = require('gulp');
var sync = require('browser-sync');
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');

//Test Gulp Install
gulp.task('default', function() {
  console.log('hello from gulp');
});

//Spin-up Server and watch files
gulp.task('serve', function() {
  sync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
  gulp.watch(['*.html'],['htmlBuild']);
  gulp.watch(['scss/*.scss'],['scssBuild']);
  gulp.watch(['js/*.js'],['jsBuild']);
});

//Manage HTML files
gulp.task('htmlBuild', function() {
  sync.reload();
});

//Manage CSS-Sass files
gulp.task('scssBuild', ['scssCSS'], function() {
  sync.reload();
});

gulp.task('scssCSS', function() {
  return gulp.src('./scss/*.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write())
    .pipe(gulp.dest('./css'));
});

//Manage JS files
gulp.task('jsBuild', function() {
  sync.reload();
});

gulp.task('jshint', function() {
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
