'use strict'

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('sass', function() {
    return gulp.src('./css/*sass')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('scss:watch', function(){
    gulp.watch('./css/*.scss',['scss']);
});

gulp.task('browser-sync', function(){
    var files = [
        './*.html',
        './css/*.css',
        './img/*.{png,jpg,gif}',
        './js/*.js'
    ];

    browserSync.init(files, {
        server: {
            baceDir: './'
        }
    });
});

gulp.task('default', ['browser-sync'], function(){
    gulp.start('scss:watch');
});