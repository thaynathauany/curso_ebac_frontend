const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");
const imagemin = require("gulp-imagemin");

function minifyImages() {
  return gulp
    .src("./source/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"));
}
function compileSass() {
  return (
    gulp
      // .src("./source/styles/*.scss")
      .src("./source/styles/main.scss")
      .pipe(sourcemaps.init())
      .pipe(sass({ outputStyle: "compressed" }))
      .pipe(sourcemaps.write("./maps"))
      .pipe(gulp.dest("./build/styles"))
  );
}

function comprimeJs() {
  return gulp
    .src("./source/scripts/*.js")
    .pipe(obfuscate())
    .pipe(uglify())
    .pipe(gulp.dest("./build/scripts"));
}

exports.watch = function () {
  gulp.watch(
    "./source/styles/**/*.scss",
    { ignoreInitial: false },
    gulp.series(compileSass)
  );

  gulp.watch(
    "./source/scripts/*.js",
    { ignoreInitial: false },
    gulp.series(comprimeJs)
  );

  gulp.watch(
    "./source/images/*",
    { ignoreInitial: false },
    gulp.series(minifyImages)
  );
};
