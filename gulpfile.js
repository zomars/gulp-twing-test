const gulp = require('gulp');
const gulpTwing = require('gulp-twing');
const Twing = require('twing');

const loader = new Twing.TwingLoaderFilesystem('src');
const env = new Twing.TwingEnvironment(loader, {
    debug: true
});

gulp.task('templates', () => {
  return gulp.src('src/templates/**/*.twig')
    .pipe(gulpTwing(env, {foo: 'bar'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', () => {
  gulp.watch('src/templates/**/*.twig', ['templates'])
});
