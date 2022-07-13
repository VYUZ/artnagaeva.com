<<<<<<< HEAD
// Основной модуль
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";

// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

// Передаем значения в глобальную переменную
global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { zip } from "./gulp/tasks/zip.js";

// Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.files, { delay: 3000 }, copy);
  gulp.watch(path.watch.html, { delay: 3000 }, html);
  gulp.watch(path.watch.scss, { delay: 3000 }, scss);
  gulp.watch(path.watch.js, { delay: 3000 }, js);
  gulp.watch(path.watch.images, { delay: 3000 }, images);
}

// Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(build, zip);

// Экспорт сценариев
export { dev };
export { build };
export { deployZIP };

// Выполнение сценария по умолчанию
// gulp.task("default", dev);

//Альтер Выполнение сценария по умолчанию
// exports.default = app.isBuild ? build : dev;
gulp.task("default", app.isBuild ? build : dev);

///
////
///
///
///
// const { watch, series, parallel } = require("gulp");
// const browserSync = require("browser-sync").create();
// //const del = require("del");

// //Конфигурация
// const path = require("./config/path.js");
// const app = require("./config/app.js");

// //Задачи
// const clear = require("./task/clear.js");
// const html = require("./task/html.js");
// const scss = require("./task/scss.js");
// const cssapp = require("./task/cssapp.js");
// const js = require("./task/js.js");
// const img = require("./task/img.js");
// const font = require("./task/font.js");

// //Сервер
// const server = () => {
//   browserSync.init({
//     server: {
//       baseDir: path.root,
//     },
//   });
// };

// //Наблюдение
// const watcher = () => {
//   watch(path.html.watch, html).on("all", browserSync.reload);
//   watch(path.scss.watch, scss).on("all", browserSync.reload);
//   watch(path.cssapp.watch, cssapp).on("all", browserSync.reload);
//   watch(path.js.watch, js).on("all", browserSync.reload);
//   watch(path.img.watch, img).on("all", browserSync.reload);
//   watch(path.font.watch, font).on("all", browserSync.reload);
// };

// const build = series(clear, parallel(html, scss, js, img, font, cssapp));
// const dev = series(build, parallel(watcher, server));

// //Задачи
// exports.html = html;
// exports.scss = scss;
// exports.cssapp = cssapp;
// exports.js = js;
// exports.img = img;
// exports.font = font;

// //Сборка
// exports.default = app.isProd ? build : dev;

// //Запуск разработки просто gulp, запуск продакшна gulp --production
=======
// Основной модуль
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";

// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

// Передаем значения в глобальную переменную
global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { zip } from "./gulp/tasks/zip.js";

// Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.files, { delay: 3000 }, copy);
  gulp.watch(path.watch.html, { delay: 3000 }, html);
  gulp.watch(path.watch.scss, { delay: 3000 }, scss);
  gulp.watch(path.watch.js, { delay: 3000 }, js);
  gulp.watch(path.watch.images, { delay: 3000 }, images);
}

// Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(build, zip);

// Экспорт сценариев
export { dev };
export { build };
export { deployZIP };

// Выполнение сценария по умолчанию
// gulp.task("default", dev);

//Альтер Выполнение сценария по умолчанию
// exports.default = app.isBuild ? build : dev;
gulp.task("default", app.isBuild ? build : dev);

///
////
///
///
///
// const { watch, series, parallel } = require("gulp");
// const browserSync = require("browser-sync").create();
// //const del = require("del");

// //Конфигурация
// const path = require("./config/path.js");
// const app = require("./config/app.js");

// //Задачи
// const clear = require("./task/clear.js");
// const html = require("./task/html.js");
// const scss = require("./task/scss.js");
// const cssapp = require("./task/cssapp.js");
// const js = require("./task/js.js");
// const img = require("./task/img.js");
// const font = require("./task/font.js");

// //Сервер
// const server = () => {
//   browserSync.init({
//     server: {
//       baseDir: path.root,
//     },
//   });
// };

// //Наблюдение
// const watcher = () => {
//   watch(path.html.watch, html).on("all", browserSync.reload);
//   watch(path.scss.watch, scss).on("all", browserSync.reload);
//   watch(path.cssapp.watch, cssapp).on("all", browserSync.reload);
//   watch(path.js.watch, js).on("all", browserSync.reload);
//   watch(path.img.watch, img).on("all", browserSync.reload);
//   watch(path.font.watch, font).on("all", browserSync.reload);
// };

// const build = series(clear, parallel(html, scss, js, img, font, cssapp));
// const dev = series(build, parallel(watcher, server));

// //Задачи
// exports.html = html;
// exports.scss = scss;
// exports.cssapp = cssapp;
// exports.js = js;
// exports.img = img;
// exports.font = font;

// //Сборка
// exports.default = app.isProd ? build : dev;

// //Запуск разработки просто gulp, запуск продакшна gulp --production
>>>>>>> 06788fb43bd62ee4eeba94b50d02f9d657ba624d
