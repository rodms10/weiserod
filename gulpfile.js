var babelify = require('babelify');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var buffer = require('vinyl-buffer');
var ghPages = require('gulp-gh-pages');
var gulp = require('gulp');
var rimraf = require('rimraf');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var watchify = require('watchify');
var _ = require('lodash');

var reload = browserSync.reload;

var config = {
  entryJSFile: './src/js/page.js',
  outputJSDir: './dist/js/',
};

function getBrowserifyBundle() {
  return  watchify(browserify(_.extend({
    entries: config.entryJSFile,
    debug: true,
    // defining transforms here will avoid crashing your stream
    transform: [babelify]
  }, watchify.args)));

}

gulp.task('js', function() {
  var b = getBrowserifyBundle();

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(config.outputJSDir))
    .pipe(reload({ stream: true }));
});

gulp.task('static', function() {
  gulp.src('./src/static/**')
    .pipe(gulp.dest('./dist/'));
});

// clean the output directory
gulp.task('clean', function(cb){
  rimraf(config.outputDir, cb);
});

gulp.task('js:watch', function() {
  gulp.watch(['./src/js/page.js'], ['js']);
});

gulp.task('static:watch', function() {
  gulp.watch(['./src/static/**'], ['static']);
});

gulp.task('build', ['js', 'static']);

gulp.task('default', ['build'], function() {
  process.exit(0);
});

gulp.task('publish', ['build'], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('watch', ['build', 'js:watch', 'static:watch'], function() {

  browserSync({
    server: {
      baseDir: './dist'
    }
  });

  getBrowserifyBundle().on('update', function() {
    gulp.start('build')
  });
});

// WEB SERVER
gulp.task('serve', function () {
  browserSync({
    server: {
      baseDir: './dist'
    }
  });
});