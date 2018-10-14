gulp = require('gulp');
sass = require('gulp-sass');
minifyCSS = require('gulp-csso');
concat = require('gulp-concat');
autoprefixer = require('gulp-autoprefixer');
plumber = require('gulp-plumber');

gulp.task('scss', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('src/css/'))
});

gulp.task('css', function() {
    gulp.src(['src/css/*.css'])
        .pipe(autoprefixer())
        .pipe(concat('app.css'))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', ['scss']);
    gulp.watch('src/css/*.css', ['css']);
});


gulp.task('default', ['scss', 'css', 'watch']);