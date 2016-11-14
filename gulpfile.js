var gulp = require('gulp');
var deploy = require('gulp-gh-pages');

var options = {
    remoteUrl: "https://github.com/spolex/spolex.github.io.git",
    branch: "master"};

gulp.task('default', function() {
    console.log("Gulp lol look at me being rad.");
});

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
    return gulp.src("./**/*")
        .pipe(deploy())
});