var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('react', function () {
  return gulp.src([
    'src/*.jsx', 'src/**/*.jsx', 'src/**/**/*.jsx',
    'src/*.js', 'src/**/*.js', 'src/**/**/*.js'
  ])
  .pipe(babel({
    sourceMaps: 'inline',
    presets: ['es2015', 'react'],
    plugins: ['transform-es2015-modules-amd']
  }))
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
  gulp.watch([
    'src/*.jsx', 'src/**/*.jsx', 'src/**/**/*.jsx',
    'src/*.js', 'src/**/*.js', 'src/**/**/*.js'
  ], ['react']);
});

gulp.task('default', ['react']);
