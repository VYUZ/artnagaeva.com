<<<<<<< HEAD
import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import cleanCss from "gulp-clean-css"; //Сжатие CSS файла
import webpcss from "gulp-webpcss"; //Вывод WEBP изображений
import autoprefixer from "gulp-autoprefixer"; //Добавление вендорных префиксов
import groupCssMediaQueries from "gulp-group-css-media-queries"; //Группировка медиазапросов

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp
    .src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SCSS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.plugins.replace(/@img\//g, "../img/"))
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
    .pipe(
      app.plugins.if(
        app.isBuild,
        webpcss({
          webpClass: ".webp",
          noWebpClass: ".no-webp",
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.css)) // Раскомментировать, если нужен не сжатый дубль файла стилей
    .pipe(app.plugins.if(app.isBuild, cleanCss()))
    .pipe(
      app.plugins.if(
        app.isBuild,
        autoprefixer({
          overrideBrowserslist: ["last 3 versions", "> 5%"],
          grid: true,
          cascade: true,
        })
      )
    )
    .pipe(rename({ extname: ".min.css" }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
};
=======
import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import cleanCss from "gulp-clean-css"; //Сжатие CSS файла
import webpcss from "gulp-webpcss"; //Вывод WEBP изображений
import autoprefixer from "gulp-autoprefixer"; //Добавление вендорных префиксов
import groupCssMediaQueries from "gulp-group-css-media-queries"; //Группировка медиазапросов

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp
    .src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SCSS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.plugins.replace(/@img\//g, "../img/"))
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
    .pipe(
      app.plugins.if(
        app.isBuild,
        webpcss({
          webpClass: ".webp",
          noWebpClass: ".no-webp",
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.css)) // Раскомментировать, если нужен не сжатый дубль файла стилей
    .pipe(app.plugins.if(app.isBuild, cleanCss()))
    .pipe(
      app.plugins.if(
        app.isBuild,
        autoprefixer({
          overrideBrowserslist: ["last 3 versions", "> 5%"],
          grid: true,
          cascade: true,
        })
      )
    )
    .pipe(rename({ extname: ".min.css" }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
};
>>>>>>> 06788fb43bd62ee4eeba94b50d02f9d657ba624d
