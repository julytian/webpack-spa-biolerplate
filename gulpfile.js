var gulp = require('gulp');
var tiny = require('gulp-tinypng-nokey');

gulp.task('default', function(cb) {
	gulp
		.src('images/*') // 图片源
		.pipe(tiny())
		.pipe(gulp.dest('src/assets/images')); // 输出地址，你的图片资源存放地址
});
