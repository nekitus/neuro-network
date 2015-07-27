var gulp       = require('gulp');
var source     = require('vinyl-source-stream');
var browserify = require('gulp-browserify');
var replace    = require('gulp-replace');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');
var watch      = require('gulp-watch');
var htmlbuild      = require('gulp-htmlbuild');
var cachebreaker = require('gulp-cache-breaker');

//Todo: воткнуть еще девелоперскую версию и вотчер
gulp.task('default', function(){
	build();

	//gulp.watch(".//**/*", function(event){
	//	build();
	//});
});


gulp.task('scripts', function () {

	gulp.src('client/src/javascripts/app.js')
		.pipe(browserify({
//			insertGlobals : true,
//			debug : !gulp.env.production,
//			basedir: __dirname,
		}))
		.pipe(concat('nx.js'))
//		.pipe(uglify())
		.pipe(gulp.dest('client/pub'));

});


gulp.task('buildHtml', function () {

	//gulp.src(['./index.html'])
	//	.pipe(cachebreaker('./pub'))
	//	.pipe(gulp.dest('./pub'));

//	gulp.src(['./index.html'])
//		.pipe(htmlbuild({
//			js: htmlbuild.preprocess.js(function (block) {
//				block.write('{{cache-break:./nx-od.js}}');
//				block.end();
//
//			})
//		}))
//		.pipe(cachebreaker('./pub/od'))
//		.pipe(gulp.dest('./pub/od'));
});


function build(){
	//gulp.run('buildHtml');
	gulp.run('scripts');
}
