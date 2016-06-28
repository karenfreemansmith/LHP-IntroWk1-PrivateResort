var gulp = require('gulp');
var sync = require('browser-sync');

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
});
