var gulp = require('gulp');
var compass = require('gulp-compass');
var browserSync = require('browser-sync');

var css = ['sass/*.scss', 'sass/**/*.scss'];

gulp.task('compass', function()
{
    gulp.src(css)
        .pipe(compass({
            config_file:'./config.rb',
            css: './css',
            sass: './sass'
        }))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', function()
{
    gulp.watch(css, ['compass']);
    gulp.watch(['*.html'], function()
    {
        browserSync.reload();
    });
});
gulp.task('browserSync', function()
{
    browserSync({
        server: {
            baseDir : './'
        }
    });
});

gulp.task('default', ['browserSync', 'watch']);
