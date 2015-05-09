var gulp = require('gulp'),

// CSS
autoprefixer = require('gulp-autoprefixer'),
minifycss = require('gulp-minify-css'),
sass = require('gulp-sass'),

// JS BUILD
concat = require('gulp-concat'),
rename = require('gulp-rename'),
uglify = require('gulp-uglify'),

// HTML
htmlmin = require('gulp-htmlmin'),

// Browser sync
browserSync = require('browser-sync'),
message = {
	jekyll: '<span style="color: grey">Running:</span> $ jekyll build'
};

/* Build Jekyll site */
gulp.task('jekyll-build', function(done) {
	//browserSync.notify(message.jekyll);
	return require('child_process').spawn('jekyll.bat', ['build'], {stdio: 'inherit'})
		.on('close', done);
});

/* Rebuild Jekyll site & reload page */
gulp.task('jekyll-rebuild', ['jekyll-build'], function(){
	gulp.start('styles', 'scripts');
	browserSync.reload();
});

/* Launch server */
gulp.task('browser-sync', ['jekyll-build'], function() {
	browserSync.init(null, {
		server: {
			baseDir: '_site'
		},
		host: 'http://192.168.1.10/'
	});
	gulp.start('styles', 'scripts');
});

gulp.task('styles', function() {
	gulp.src('assets/css/style.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(minifycss({keepBreaks: false, keepSpecialComments:true}))
		.pipe(rename('style.css'))
		.pipe(gulp.dest('_site/assets/css'))
		.pipe(browserSync.reload({stream: true}))
});

// gulp.task('html', ['jekyll'], function() {
// 	gulp.src(['*.html', '**/*.html', '*.md', '**/*.md'])
// 		.pipe(htmlmin({collapseWhitespace: true}))
// 		.pipe(gulp.dest('_site/'))
// 		.pipe(browserSync.reload({stream:true, once: true}));
// });

gulp.task('scripts', function () {
	gulp.src(['assets/js/*.j     s', '!assets/js/advertisement.js'])
		.pipe(concat('site.js'))
		.pipe(gulp.dest('_site/assets/js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('_site/assets/js'))
		//.pipe(browserSync.reload())
});

gulp.task('watch', function() {
	gulp.watch([
		'index.html',
		'*.md'
	], ['jekyll-rebuild']);
	gulp.watch('assets/**/*.js', ['scripts']);
	gulp.watch('assets/**/*.scss', ['styles']);
})

gulp.task('default', function (event) {
	gulp.start('browser-sync', 'watch');
});