var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function () {
    // Endless stream mode
    watch('scss/**/*.scss', ['sass']);
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./",
        port: 4000,
        injectChanges: true
    });

    watch('scss/**/*.scss').on('change', function() {
      gulp.start('sass');
    });
    watch("css/**/*.css").on('change', browserSync.reload);
    watch("**/*.html").on('change', browserSync.reload);
    watch("js/**/*.js").on('change', browserSync.reload);
});
