const gulp = require('gulp')
const gulpTwing = require('gulp-twing')

// Custom modules
const renderTwigOptions = {
  templatePaths: ['.', './src/templates', './src/pages']
}

gulp.task('pages', () => {
  return gulp
    .src('src/pages/**/*.twig')
    .pipe(gulpTwing(undefined, renderTwigOptions))
    .pipe(gulp.dest('./dist'))
})

// Watch for file changes
gulp.task('watch', () => {
  // Watch site generators
  gulp.watch(['pages/**/*.twig','templates/**/*.twig'], { cwd: './src' }, ['pages'])
})

// Slow watch tasks
gulp.task('default', ['watch'])
