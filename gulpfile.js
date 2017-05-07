var gulp = require('gulp'),
  sass = require('gulp-sass'),
  uglify = require('gulp-uglify'),
  minify = require('gulp-minify-css'),
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  browserSync = require('browser-sync').create();

var jsSources = ['assets/scripts/*.js'],
  sassSources = ['assets/styles/*.scss'],
  outputDir = 'dist/assets';


gulp.task('sass', function () {
  gulp.src(sassSources)
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest(outputDir))
    .pipe(minify())
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest(outputDir))
});

gulp.task('js', function () {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(gulp.dest(outputDir))
    .pipe(rename({extname: '.min.js'}))
    .pipe(uglify())
    .pipe(gulp.dest(outputDir))
});

gulp.task('browser-sync', function () {
  var files = [
    '*.html',
    'dist/assets/styles.min.css',
    'dist/assets/script.min.js'
  ];

  browserSync.init(files, {
    server: {
      baseDir: './'
    }
  });
});

gulp.task('default', ['browser-sync'], function () {
  gulp.watch('assets/styles/*.scss', ['sass']);
  gulp.watch('assets/scripts/*.js', ['js']);
});
