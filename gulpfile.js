'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var posthtml = require('gulp-posthtml');
var postcss = require('gulp-postcss');
var csso = require('gulp-csso');
var imagemin = require('gulp-imagemin');
var pug = require('gulp-pug');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var cssnano = require('gulp-cssnano');
var rename = require("gulp-rename");
var webp = require('gulp-webp');
var include = require("gulp-include");
var minify = require('gulp-minify');
var cache = require('gulp-cache');
var build = require('gulp-build');
var del = require('del');
var uglify = require("gulp-uglify");
var concat = require('gulp-concat');
var spritesmith = require('gulp.spritesmith');
var uglify = require('gulp-uglify-es').default;




gulp.task('default', function() {
    console.log("hello people!")
});

gulp.task('sass', function () {
return gulp.src(['src/style/main.scss'])
.pipe(sass({outputStyle: 'expanded'})
.on('error', sass.logError))
.pipe(autoprefixer({
   browsers: ['last 2 versions'],
   cascade: false
 }))
.pipe(gulp.dest('dist/css'))
.pipe(cssnano())
.pipe(rename({suffix: 'main.css'})) // Выгружаем результата в папку css
});

gulp.task('browser-sync', function () {
  browserSync.init({
    open: true,
    server: {
      baseDir: "./"
    }
  });
  browserSync.watch('dist', browserSync.reload)
});
//watch//
gulp.task('watch', ['browser-sync', 'sass', 'html', 'img', 'js'], function () {
gulp.watch('src/style/**/*.scss', ['sass']);
  gulp.watch('./*.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', browserSync.reload);
  gulp.watch('src/img/*.+(jpg|jpeg|png|gif)', browserSync.reload);


});
//end watch//
gulp.task("html", function () {
  return gulp.src("src/**/*.html")
    .pipe(gulp.dest("./*.html"))
.pipe(gulp.dest('dist/html'));
});

//gulp.task('js', function () {
  //return gulp.src('src/js/**/*.js')
    //.pipe(jshint())
    //.pipe(jshint.reporter('default'))
    //.pipe(uglify())
    //.pipe(concat('app.js'))
    //.pipe(gulp.dest('dist'));
//});

gulp.task('scripts', function () {//scipts
  return gulp.src(['src/js/**/*.js '])
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('img', function () {
  return gulp.src('src/img/*')
    .pipe(imagemin({
progressive: true,
      svgoPlugins: [{ removeViewBox: false }],

        interlaced: true
    }))
    .pipe(gulp.dest('dist/img'));
});
gulp.task("default", ["watch", "sass", "html", "scripts", "img"]);


gulp.task('js', function () {
  gulp.src('js/*.js')
    .pipe(minify())
    .pipe(gulp.dest("dist/js"));
  gulp.watch('js/*.js', ['uglify']);
});
//gulp.task('uglify', function () {
  //gulp.src('js/*.js')
    //.pipe(uglify())
  //.pipe(gulp.dest('dist/js'));
//});
//gulp.task('minify', function () {//
  //gulp.src('js/*.js')
    //.pipe(uglify())
    //.pipe(gulp.dest('dist/js'));
//});

gulp.task('css', function () {
    var plugins = [
        autoprefixer({ browsers: ['last 2 version'] }),
        cssnano()
    ];
    return gulp.src('css/**/*.css')
        .pipe(postcss(plugins))
      .pipe(rename({ suffix: '.min.css' }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('clean', function () {
    return del.sync('dist');
});

gulp.task('build', ['clean', 'img','scripts', 'sass','html'], function () {
var buildCss = gulp.src([ 'css/main.css'])// Переносим библиотеки в продакшен
.pipe(gulp.dest('dist/css'))
var buildFonts = gulp.src('src/fonts/**/*') // Переносим шрифты в продакшен
.pipe(gulp.dest('dist/fonts'))
var buildJs = gulp.src('js/**/*') // Переносим скрипты в продакшен
.pipe(gulp.dest('dist/js'))
var buildHtml = gulp.src('./*.html') // Переносим HTML в продакшен
        .pipe(gulp.dest('dist'));

});

gulp.task('compress', function () {
  gulp.src('src/img/*.png')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
});

gulp.task("webp", function () {
  return gulp.src("src/img/**/*.{png,jpg}")
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest("img"));
});

  gulp.task('serve', function () {
      browserSync.init({
        server: {
          baseDir:'./'
        }
      });

});

gulp.task("server", function () {
    server.init({
        server: "./dist",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

//end server//
    gulp.task('default', function () {
        return gulp.src('./main.css')
            .pipe(cssnano())
            .pipe(gulp.dest('dist'));
    });

    gulp.task('default', ['serve']);

gulp.task('default', function () {
    return gulp.src('src/img.jpg')
        .pipe(webp())
        .pipe(gulp.dest('dist'));
});
});
