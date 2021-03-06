const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
 
 // funcion reload en cambios scss 
function style() {
 return gulp.src('scss/*.scss')
   .pipe(sass())
   .pipe(gulp.dest('app/css'))
   .pipe(browserSync.stream())
}
 // funcion reload en cambios en js
function watch() {
 browserSync.init({
   server: {
     baseDir: './app'
   }
 })
 
 gulp.watch('scss/*.scss', style);
 
 gulp.watch("app/*.html").on('change', browserSync.reload);
}
 
exports.watch = watch
exports.style = style;
 
gulp.task('default', gulp.parallel(style, watch))