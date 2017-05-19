var gulp = require("gulp"), 
    connect = require("gulp-connect"),
    historyApiFallback = require("connect-history-api-fallback");

var jshint = require("gulp-jshint"),
    stylish = require("jshint-stylish");

//Development Web Server
gulp.task("server", function(){
    connect.server({
        root:"./app",
        hostname:"0.0.0.0",
        port:"8080",
        livereload:true
    });
});

gulp.task("html", function(){
    gulp.src("./app/**/*.html").pipe(connect.reload());
});

gulp.task("jshint", function(){
    gulp.src("./app/scripts/**/*.js")
    //.pipe(jshint(".jshintrc"))
    .pipe(jshint.reporter("jshint-stylish"))
    .pipe(jshint.reporter("fail"));
});

gulp.task("watch", function(){
    gulp.watch(["./app/**/*.html"], ["html"]);
    gulp.watch(["./app/**/*.js", "./Gulpfile.js"], ["jshint"]);
})

gulp.task("default",["server", "watch"]);