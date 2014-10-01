
/**
 * Gulpfile.
 */

/**
 * Dependencies.
 */

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

/**
 * Configuration.
 */

var config = {
  styles: {
    src: 'scss/ucss.scss',
    dest: 'public/css'
  }
};

/**
 * SASS task.
 */

gulp.task('styles', function() {
  return gulp.src(config.styles.src)
    .pipe(sass({ style: 'expanded' }))
    .pipe(gulp.dest(config.styles.dest))
  ;
});

/**
 * Default task.
 */

gulp.task('default', ['styles']);
