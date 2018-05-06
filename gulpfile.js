const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

// Logs Message
gulp.task('message', function(){
    return console.log('Gulp is running...');
});

// Optimize Images
gulp.task('imageMin', () =>
	gulp.src('img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('img'))
);

// Minify JS
gulp.task('minify', function(){
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
  });
  
// Compile Sass
gulp.task('sass', function(){
    gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(''))
        .pipe(browserSync.stream());
});

// Scripts
gulp.task('scripts', function(){
    gulp.src('scripts/*.js')
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('scripts'));
});

  
  // Watch & Serve
gulp.task('serve', ['message', 'imageMin', 'sass', 'scripts'], function() {
    browserSync.init({
        server: ""  
    });

    gulp.watch('scripts/*.js', ['scripts']);
    gulp.watch('img/*', ['imageMin']);
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['serve']);