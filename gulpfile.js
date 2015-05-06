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
gulp.task('jekyll', function() {
	browserSync.notify(message.jekyll);
	require('child_process').spawn('jekyll.bat', ['build'], {stdio: 'inherit'});
});

/* Rebuild Jekyll site & reload page */
gulp.task('jekyll-rebuild', ['jekyll-build'], function(){
	browserSync.reload();
});

/* Wait for jekyll, then launch server */
gulp.task('bs', ['scss', 'jekyll'] function() {
	browserSync({
		server: {
			baseDir: '_site'
		}
	});
});

gulp.task('scss', function() {
	gulp.src('assets/style.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(minifycss({keepBreaks: false, keepSpecialComments:true}))
		.pipe(rename('yolo.css'))
		.pipe(gulp.dest('_site/assets/css'))
		.pipe(browserSync.reload({stream: true}));
		.pipe(gulp.dest('assets/css'))
});

// gulp.task('html', ['jekyll'], function() {
// 	gulp.src('**/*.html')
// 		.pipe(htmlmin({collapseWhitespace: true}))
// 		.pipe(gulp.dest(deploy))
// 		.pipe(browserSync.reload({stream:true, once: true}));
// });

// gulp.task('js', function () {
// 	gulp.src('**/*.js')
// 		.pipe(concat('.js'))
// 		.pipe(gulp.dest('js'))
// 		.pipe(rename('.min.js'))
// 		.pipe(uglify())
// 		.pipe(gulp.dest('js/min'));
// });

// // gulp.task('jekyll', ['js'], function (gulpCallBack){
// // 	var spawn = require('child_process').spawn;
// // 	// After build: cleanup HTML
// // 	var jekyll = spawn('jekyll', ['build'], {stdio: 'inherit'});
 
// // 	jekyll.on('exit', function(code) {
// // 		gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: '+code);
// // 	});
// // });
 
gulp.task('default', ['bs'], function (event) {
	// gulp.watch([
	// 	path.join(dist, '*.html'),
	// 	path.join(dist, '*.md'),
	// 	path.join(dist, '**/*.html'),
	// 	path.join(dist, '**/*.md')
	// ], ['html']);
	//gulp.watch('**/*.js', ['html']);
	gulp.watch('**/*.scss', ['scss']);
});