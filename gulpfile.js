var gulp = require('gulp');
var deploy = require('gulp-gh-pages');


gulp.task('default', function() {
    console.log("Gulp lol look at me being rad.");
});

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
    return gulp.src("./dist/**/*")
        .pipe(deploy())
});