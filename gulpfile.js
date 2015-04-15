'use strict';

var gulp = require('gulp');
var shell = require('gulp-shell');
var htmlReplace = require('gulp-html-replace');

gulp.task('develop', runWebpackHotDevServer);
gulp.task('build', copyBuildAsset);


/**
 * Run webpack hot dev server
 */
function runWebpackHotDevServer () {

  return gulp.src('')
    .pipe(shell(['webpack-dev-server --devtool eval --hot --progress --colors --content-base public']));
}



function copyBuildAsset () {

    gulp.src('./public/**/*').pipe(gulp.dest('./build'));
}