var gulp = require('gulp');
var zip = require('gulp-zip');

gulp.task('deploy', function(){
    return gulp.src(['**', '!node_modules/**', '!dest', '!gulpfile.js'])
    .pipe(zip('deploy.zip'))
    .pipe(gulp.dest('dest/'))
});

gulp.task('default', function(){
    gulp.run('deploy');
})