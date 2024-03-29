const gulp = require('gulp');
const sass = require("gulp-sass")(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeImagem(){
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))

}

function conpilaSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sass({
            outputStyle:'compressed'
        }))
        .pipe(gulp.dest('./build/styles'));
}


exports.sass = conpilaSass;
exports.javascript = comprimeJavaScript;
exports.images = comprimeImagem;