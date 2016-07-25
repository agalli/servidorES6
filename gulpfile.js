var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');

gulp.task("clean", function () {
    return gulp.src("dist/*")
        .pipe(clean());
});

gulp.task("default", ['clean'],function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
//    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});