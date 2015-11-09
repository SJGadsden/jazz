import gulp from 'gulp';
import babelify from 'babelify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import browserSync from 'browser-sync';
import sass from 'gulp-sass';
import ghPages from 'gh-pages';

const sync = browserSync.create();

gulp.task('html', () => {
    gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(sync.reload({
      stream: true
    }));
});

gulp.task('script', () => {
  browserify({
      entries: ['./src/scripts/main.js'],
      extension: ['.js'],
      debug: true
    }).transform(babelify).bundle()
    .on('error', function(err) {
      console.log(err.toString());
      this.emit("end");
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'))
    .pipe(sync.reload({
      stream: true
    }));
});

gulp.task('styles', () => {
  gulp.src('src/styles/**/*.{scss,sass}')
    .pipe(sass({
      includePaths: ['node_modules']
    }).on('error', sass.logError))
    .pipe(gulp.dest('dist'))
    .pipe(sync.reload({
      stream: true
    }));
});

gulp.task('build', ['html', 'script', 'styles']);

gulp.task("deploy", ["build"], () => {
  ghPages.publish("dist");
});

gulp.task('serve', ['build'], () => {
  sync.init({
    server: 'dist',
  });

  gulp.watch('src/**/*.{html,jade}', ['html']);
  gulp.watch('src/**/*.{scss,sass}', ['styles']);
  gulp.watch('src/**/*.js', ['script'])
});

gulp.task('default', ['serve']);
