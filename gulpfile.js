var gulp        = require('gulp'),
    browserSync = require('browser-sync').create();
    ghPages     = require('gulp-gh-pages');


gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });

  gulp.watch('./dist/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);

gulp.task('deploy', function() {
return gulp.src('./dist/**')
  .pipe(ghPages());
});

gulp.task('js', function() {
  return gulp.src('./src/scripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest('./dist/scripts'));
});
