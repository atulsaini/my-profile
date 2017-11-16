var gulp = require("gulp");

// gulp.task('default', function(){
//   console.log('hola');
// });
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var browserSyns = require("browser-sync");

var scripts = require('./scripts');
var styles = require('./styles');


var devMode = false;

gulp.task('sass', function() {
  gulp.src(styles)
      .pipe(sass())
      .pipe(concat('main.css'))
      .pipe(gulp.dest('./dist/css'))
      .pipe(browserSyns.reload({
        stream: true
      }));
});

gulp.task('js', function() {
  gulp.src(scripts)
      .pipe(concat('scripts.js'))
      .pipe(gulp.dest('./dist/js'))
      .pipe(browserSyns.reload({
        stream: true
      }));
});

gulp.task('html', function() {
  gulp.src('./src/templates/**/*.html')
      .pipe(gulp.dest('./dist/'))
      .pipe(browserSyns.reload({
        stream: true
      }));
});

gulp.task('img', function() {
  gulp.src('./src/img/**/*.*')
      .pipe(gulp.dest('./dist/img'))
      .pipe(browserSyns.reload({
        stream: true
      }));
});

// compile assets
gulp.task('assets', function () {
  gulp.src('./src/assets/**/*.*')
      .pipe(gulp.dest('./dist/assets'))
      .pipe(browserSyns.reload({
        stream: true
      }));
});

gulp.task('build', function(){
  gulp.start(['sass', 'js', 'html', 'img', 'assets']);
});


// gulp.task()

gulp.task('browser-sync', function() {
  browserSyns.init(null, {
    open: false,
    server: {
      baseDir: './'
    }
  });
});

gulp.task('start', function() {
  devMode = true;
  gulp.start(['build', 'browser-sync']);
  gulp.watch(['./src/sass/**/*.scss'], ['sass']);
  gulp.watch(['./src/js/**/*.js'], ['js']);
  gulp.watch(['./src/tamplates/**/*.html'], ['html']);
  gulp.watch(['./src/img/**/*.*'], ['img']);
  gulp.watch(['./src/assets/**/*.*'], ['assets']);
});
