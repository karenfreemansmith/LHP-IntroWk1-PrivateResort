var gulp = require('gulp');
var sync = require('browser-sync');
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');

gulp.task('default', function() {
  console.log('hello from gulp');
});

gulp.task('serve', function() {
  sync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
  gulp.watch(['*.html'],['htmlBuild']);
  gulp.watch(['scss/*.scss'],['scssBuild']);
});

gulp.task('htmlBuild', function() {
  sync.reload();
});

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
