var autoprefixer = require('autoprefixer-core');
var babelify = require('babelify');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var buffer = require('vinyl-buffer');
var exit = require('gulp-exit');
var ghPages = require('gulp-gh-pages');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var postcss = require('gulp-postcss');
var rimraf = require('rimraf');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var watchify = require('watchify');
var _ = require('lodash');

var reload = browserSync.reload;

function getBrowserifyBundle() {
  return  watchify(browserify(_.extend({
    entries: './src/js/page.js',
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
    .pipe(gulp.dest('./dist/js/'))
    .pipe(reload({ stream: true }));
});

gulp.task('css', function () {
  return gulp.src('./src/css/*.css')
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 version'] }) ]))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('img', function () {
  return gulp.src('./src/img/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('./dist/img/'));
});

gulp.task('static', function() {
  gulp.src('./src/static/**')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('js:watch', function() {
  gulp.watch(['./src/js/page.js'], ['js']).on('change', reload);
});

gulp.task('css:watch', function() {
  gulp.watch(['./src/css/*.css'], ['css']).on('change', reload);
});

gulp.task('img:watch', function() {
  gulp.watch(['./src/img/**'], ['img']).on('change', reload);
});

gulp.task('static:watch', function() {
  gulp.watch(['./src/static/**'], ['static']).on('change', reload);
});

// clean the output directory
gulp.task('clean', function(cb){
  rimraf('./dist', cb);
});

gulp.task('build', ['js', 'static', 'css', 'img']);

gulp.task('default', ['build'], function() {
  process.exit(0);
});

gulp.task('publish', ['build'], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages())
    .pipe(exit());
});

gulp.task(
  'watch',
  ['build', 'js:watch', 'static:watch', 'css:watch', 'img:watch'],
  function() {

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