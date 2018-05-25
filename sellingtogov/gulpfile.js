/*global -$ */
'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var paths = {
  styles: {
    files: 'scss/**/*.scss'
  }
}

// Error notifications
var reportError = function(error) {
  $.notify({
    title: 'Gulp Task Error',
    message: 'Check the console.'
  }).write(error);
  console.log(error.toString());
  this.emit('end');
}

// Sass processing
gulp.task('sass', function() {
   gulp.src(paths.styles.files)
    .pipe($.sourcemaps.init())
    // Convert sass into css
    .pipe($.sass({
      outputStyle: 'compressed', // libsass doesn't support expanded yet
      precision: 10
    }))
    // Show errors
    .on('error', reportError)
    // Autoprefix properties
    .pipe($.autoprefixer({
      browsers: ['last 2 versions']
    }))
    // Write sourcemaps
    .pipe($.sourcemaps.write({addComment: false}))
    // Save css
    .pipe(gulp.dest('css'));
});

// process JS files and return the stream.
gulp.task('js', function () {
  return gulp.src('js/**/*.js')
    .pipe(gulp.dest('js'));
});


// JS hint
gulp.task('jshint', function() {
  return gulp.src('js/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.notify({
      title: "JS Hint",
      message: "JS Hint says all is good.",
      onLast: true
    }));
});

// Beautify JS
gulp.task('beautify', function() {
  gulp.src('js/*.js')
    .pipe($.beautify({indentSize: 2}))
    .pipe(gulp.dest('js'))
    .pipe($.notify({
      title: "JS Beautified",
      message: "JS files in the theme have been beautified.",
      onLast: true
    }));
});

// Compress JS
gulp.task('compress', function() {
  return gulp.src('js/*.js')
    .pipe($.sourcemaps.init())
    .pipe($.uglify())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('js'))
    .pipe($.notify({
      title: "JS Minified",
      message: "JS files in the theme have been minified.",
      onLast: true
    }));
});



gulp.task('default', function() {
    gulp.start('sass');
});
// Default task to be run with `gulp`
gulp.task('default', ['sass'], function() {
  gulp.watch("scss/**/*.scss", ['sass']);
  gulp.watch("js/**/*.js", ['js']);
});
