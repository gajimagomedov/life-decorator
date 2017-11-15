let gulp        = require('gulp'),
    prefixer    = require('gulp-autoprefixer'),
    uglify      = require('gulp-uglify'),
    sass        = require('gulp-sass'),
    babel 	    = require('gulp-babel'),
    imagemin    = require('gulp-imagemin'),
    cleanCSS    = require('gulp-clean-css')
    browserSync = require("browser-sync"),
    rigger      = require('gulp-rigger'),
    reload      = browserSync.reload;


let path = {
    build: { 
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: { 
        html: 'src/*.html', 
        js: 'src/js/main.js',
        style: 'src/css/main.sass',
        img: 'src/img/**/*.*', 
        fonts: 'src/fonts/**/*.*'
    },
    watch: { 
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

let config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "life-decorator"
};

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger()) 
        .pipe(gulp.dest(path.build.html)) 
        .pipe(reload({stream: true}));
});