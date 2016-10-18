// var gulp = require('gulp'),
// 　　//代替 minifycss
// 　　cleanCSS = require('gulp-clean-css'),
// 　　//minifycss = require('gulp-minify-css'),
//     concat = require('gulp-concat'),
//     uglify = require('gulp-uglify'),
//     rename = require('gulp-rename'),
//     jshint=require('gulp-jshint');
//
//     //语法检查
//     gulp.task('jshint', function () {
//         return gulp.src('src/js/*.js')
//             .pipe(jshint())
//             .pipe(jshint.reporter('default'));
//     });
//
//     //压缩css
//     gulp.task('minifycss', function() {
//         return gulp.src('src/css/*.css')    //需要操作的文件
//             .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
//             .pipe(cleanCSS({compatibility: 'ie7'}))   //执行压缩
//             .pipe(gulp.dest('src/Css'));   //输出文件夹
//     });
//
//     //压缩,合并 js
//     gulp.task('minifyjs', function() {
//         return gulp.src('src/js/*.js')      //需要操作的文件
//             .pipe(concat('main.js'))    //合并所有js到main.js
//             .pipe(gulp.dest('src/js'))       //输出到文件夹
//             .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
//             .pipe(uglify())    //压缩
//             .pipe(gulp.dest('src/Js'));  //输出
//     });
//
// 　　//默认命令，在cmd中输入gulp后，执行的就是这个任务(压缩js需要在检查js之后操作)
//     gulp.task('default',['jshint'],function() {
//         gulp.start('minifycss','minifyjs');
// 　　});

var gulp = require('gulp'),
    jshint=require('gulp-jshint'),
    less = require('gulp-less'),
    cssmin = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');
 //less编译并压缩任务
gulp.task('testLess', function () {
    //编译src目录下的所有less文件
    //除了reset.less和test.less（**匹配src/less的0个或多个子文件夹）
    gulp.src(['src/less/*.less', '!src/less/**/{reset,test}.less'])
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('src/css'));
});
//合并所有css
gulp.task('concatcss', function() {
    return gulp.src('src/css/*.css')
        .pipe(concat('all.css'))    //合并所有css到main.css
        .pipe(gulp.dest('build'));    //输出main.css到文件夹
});

//压缩js任务
gulp.task('minifyjs', function() {
    return gulp.src('src/js/*.js')
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('src/js/min'));  //输出
});
//合并所有js任务
gulp.task('concatjs', function() {
    return gulp.src('src/js/min/*.js')
        .pipe(concat('all.js'))    //合并所有js到main.js
        .pipe(gulp.dest('build'));    //输出main.js到文件夹
});

gulp.task('default', function () {
    gulp.watch('src/**/*.less', ['testLess']); //当所有less文件发生改变时，调用testLess任务
    gulp.watch('src/**/*.css',['concatcss']);
    gulp.watch('src/**/*.js',['minifyjs']);
    gulp.watch('src/**/*.js',['concatjs']);

});
