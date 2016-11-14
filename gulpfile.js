/**
 * Created by spolex on 14/11/16.
 */
var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');

var options = {
    "branch" : "master"
}

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
    return gulp.src("./dist/**/*")
        .pipe(deploy(options))
});
