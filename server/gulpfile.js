const gulp = require("gulp");
const nodemon = require("nodemon");
const ts = require("gulp-typescript");
require("dotenv").config();
const ASSET_FILES = ["src/*.json", "src/**/*.json", "src/*.env", "src/**/*.env"];

const tsProject = ts.createProject("tsconfig.json");
gulp.task("compile", () => {
    const tsResult = tsProject.src().pipe(tsProject());
    return tsResult.js.pipe(gulp.dest("build"));
});

gulp.task("assets", () => {
    return gulp.src(ASSET_FILES).pipe(gulp.dest("build"));
});

gulp.task("nodemon", () => {
    if (process.env.DEV_MODE) {
        console.log("------------ nodemon running ------------");
        nodemon({
            script: "build/index.js"
        });
    }
});

gulp.task("watch", () => {
    gulp.watch("src/**/*.ts", gulp.series("compile"));
});

gulp.task("default", gulp.series(gulp.parallel("compile", "assets"), gulp.parallel("nodemon", "watch")));