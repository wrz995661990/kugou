var gulp=require("gulp"),
    cleanCss=require("gulp-clean-css"),
    sass=require("gulp-sass"),
    webserver=require("gulp-webserver");
//编译sass
gulp.task("sass",function(){
    return gulp.src("scss/style.scss")
            .pipe(sass())
            .pipe(gulp.dest("css"))
})
//监测
gulp.task("watch",function(){
    gulp.watch("scss/style.scss",["sass"])
})
gulp.task("default",["watch"])