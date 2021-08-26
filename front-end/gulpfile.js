// Gulp Variables
var gulp = require('gulp');
	sass = require('gulp-sass')(require('sass'));
 	livereload = require('gulp-livereload');
 	connect = require('gulp-connect');
 	jshint = require('gulp-jshint');
  rename = require('gulp-rename');
  minifyCss = require('gulp-minify-css');
	minify = require('gulp-minify');

// Server Task
function serve (done) {
    connect.server({
        root: '',
        port: 5000,
        livereload: true
    });
		done();
};

// Styles Task
function styles (done) {
    gulp.src('sass/custom.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifyCss())
        .pipe(gulp.dest('css/'))
        .pipe(connect.reload());
				done();
};

// HTML Task
// * represents ANY- it will reload ANY html file instantly
function html (done) {
    gulp.src('./*.html')
    .pipe(connect.reload());
		done();
};

// JS Lint Task for correcting and monitoring your custom.js
// will Lint ANY js file for you
function lint (done) {
	gulp.src('js/custom.js')
  .pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(connect.reload());
	done();
};

// Watch task to watch for file changes
function watch (done) {
	gulp.watch('sass/**/*.scss', gulp.series(styles));
	gulp.watch('./*.html', gulp.series(html));
	gulp.watch('js/*.js', gulp.series(lint));
	done();
}

// Tasks that Gulp will run
gulp.task('default', gulp.series(serve, watch, lint, html, styles));
