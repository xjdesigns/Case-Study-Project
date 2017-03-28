var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function () {
    // Endless stream mode
    watch('sass/**/*.scss', ['sass']);
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./",
        port: 4000,
        injectChanges: true
    });

    watch('sass/**/*.scss', ['sass']).on('change', function() {
      browserSync.reload;
      gulp.start('sass');
    });
    watch("**/*.html").on('change', browserSync.reload);
    watch("js/**/*.js").on('change', browserSync.reload);
});
