<<<<<<< HEAD
import replace from "gulp-replace"; //Поиск и замена
import plumber from "gulp-plumber"; //Обработка ошибок
import notify from "gulp-notify"; //Сообщения (подсказки)
import browsersync from "browser-sync"; //Локальный сервер
import newer from "gulp-newer"; // Проверка обновления (используем для картинок)
import ifPlugin from "gulp-if"; // Условное ветвление

//Экспортируем объект
export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin,
};

// const isProd = process.argv.includes("--production");
// const isDev = !isProd;

// module.exports = {
//   isProd: isProd,
//   isDev: isDev,

//   htmlmin: {
//     collapseWhitespace: isProd,
//     removeComments: isProd,
//     //если нужно удалять комментарии и на проде и в разработке
//     // removeComments: true,
//   },

//   imagemin: {
//     verbose: true,
//   },
// };
=======
import replace from "gulp-replace"; //Поиск и замена
import plumber from "gulp-plumber"; //Обработка ошибок
import notify from "gulp-notify"; //Сообщения (подсказки)
import browsersync from "browser-sync"; //Локальный сервер
import newer from "gulp-newer"; // Проверка обновления (используем для картинок)
import ifPlugin from "gulp-if"; // Условное ветвление

//Экспортируем объект
export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin,
};

// const isProd = process.argv.includes("--production");
// const isDev = !isProd;

// module.exports = {
//   isProd: isProd,
//   isDev: isDev,

//   htmlmin: {
//     collapseWhitespace: isProd,
//     removeComments: isProd,
//     //если нужно удалять комментарии и на проде и в разработке
//     // removeComments: true,
//   },

//   imagemin: {
//     verbose: true,
//   },
// };
>>>>>>> 06788fb43bd62ee4eeba94b50d02f9d657ba624d
