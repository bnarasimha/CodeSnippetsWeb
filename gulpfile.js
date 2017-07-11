var gulp = require('gulp');
var zip = require('gulp-zip');
var gulpNgConfig = require('gulp-ng-config')

gulp.task('deploy', function(){
    return gulp.src(['**', '!node_modules/**', '!dest'])
    .pipe(zip('deploy.zip'))
    .pipe(gulp.dest('dest/'))
});

gulp.task('config', function(){
    gulp.src('app/config/config.json')
    .pipe(gulpNgConfig("codeSnip", {environment:process.env.NODE_ENV}))
    .pipe(gulp.dest('./app/scripts'));
})

gulp.task('deploysh', function(){
    gulp.src(['deploy.sh'])
    .pipe(gulp.dest('dest/'))
})

gulp.task('gulpfile', function(){
    gulp.src(['gulpfile.js'])
    .pipe(gulp.dest('dest/'))
})

gulp.task('default', ["config", "deploysh", "gulpfile", "deploy"], function(){
    
})