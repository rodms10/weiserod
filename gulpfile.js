var autoprefixer = require('autoprefixer-core');
var babelify = require('babelify');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var buffer = require('vinyl-buffer');
var ghPages = require('gulp-gh-pages');
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var rimraf = require('rimraf');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var watchify = require('watchify');
var _ = require('lodash');


var reload = browserSync.reload;

var config = {
  entryJSFile: './src/js/page.js',
  outputJSDir: './dist/js/',
  outputDir: './dist/',
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

gulp.task('css', function () {
  return gulp.src('./src/css/*.css')
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 version'] }) ]))
    .pipe(gulp.dest('./dist/css/'));
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
  gulp.watch(['./src/js/page.js'], ['js']).on('change', reload);
});

gulp.task('css:watch', function() {
  gulp.watch(['./src/css/*.css'], ['css']).on('change', reload);
});

gulp.task('static:watch', function() {
  gulp.watch(['./src/static/**'], ['static']).on('change', reload);
});

gulp.task('build', ['js', 'static', 'css']);

gulp.task('default', ['build'], function() {
  process.exit(0);
});

gulp.task('publish', ['build'], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('watch', ['build', 'js:watch', 'static:watch', 'css:watch'], function() {

  browserSync({
    server: {
      baseDir: './dist'
    }
  });

  getBrowserifyBundle().on('update', function() {
    gulp.start('build');
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