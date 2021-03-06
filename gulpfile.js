var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require("autoprefixer");
var server = require("browser-sync");

gulp.task('sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(plumber())
        .pipe(postcss([
        	autoprefixer({
        		browsers: ['last 2 versions'],
        		cascade: false
        		})
        	]))

		.pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest('./css/'))
        .pipe(server.reload({stream: true}));
});

//Watch task
gulp.task('start', ['sass'], function() {
	server.init({
		server: "."
	});
	//gulp.run('sass');

    gulp.watch('sass/**/*.scss',['sass']);
	gulp.watch("*.html")
	.on("change", server.reload);
});
