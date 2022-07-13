<<<<<<< HEAD
//Получаем имя папки проекта
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const srcFolder = "./src";
const buildFolder = "./build"; // Также можно использовать название тек.проекта rootFolder

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    js: `${srcFolder}/js/main.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
};

// const pathSrc = ".";
// const pathDest = "./build";

// module.exports = {
//   root: pathDest,
//   html: {
//     src: pathSrc + "/html/*.html",
//     watch: pathSrc + "/html/**/*.html",
//     dest: pathDest,
//   },
//   css: {
//     src: pathSrc + "/css/*.css",
//     watch: pathSrc + "/css/**/*.css",
//     dest: pathDest + "/css",
//   },
//   cssapp: {
//     src: pathSrc + "/css/*.css",
//     watch: pathSrc + "/css/**/*.css",
//     dest: pathDest + "/css",
//   },
//   scss: {
//     src: pathSrc + "/scss/*.{sass,scss}",
//     watch: pathSrc + "/scss/**/*.{sass,scss}",
//     dest: pathDest + "/css",
//   },
//   js: {
//     src: pathSrc + "/js/*.js",
//     watch: pathSrc + "/js/**/*.js",
//     dest: pathDest + "/js",
//   },
//   img: {
//     src: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg,webmanifest,ico}",
//     watch: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg}",
//     dest: pathDest + "/img",
//   },
//   font: {
//     src: pathSrc + "/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
//     watch: pathSrc + "/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
//     dest: pathDest + "/font",
//   },
// };
=======
//Получаем имя папки проекта
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const srcFolder = "./src";
const buildFolder = "./build"; // Также можно использовать название тек.проекта rootFolder

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    js: `${srcFolder}/js/main.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
};

// const pathSrc = ".";
// const pathDest = "./build";

// module.exports = {
//   root: pathDest,
//   html: {
//     src: pathSrc + "/html/*.html",
//     watch: pathSrc + "/html/**/*.html",
//     dest: pathDest,
//   },
//   css: {
//     src: pathSrc + "/css/*.css",
//     watch: pathSrc + "/css/**/*.css",
//     dest: pathDest + "/css",
//   },
//   cssapp: {
//     src: pathSrc + "/css/*.css",
//     watch: pathSrc + "/css/**/*.css",
//     dest: pathDest + "/css",
//   },
//   scss: {
//     src: pathSrc + "/scss/*.{sass,scss}",
//     watch: pathSrc + "/scss/**/*.{sass,scss}",
//     dest: pathDest + "/css",
//   },
//   js: {
//     src: pathSrc + "/js/*.js",
//     watch: pathSrc + "/js/**/*.js",
//     dest: pathDest + "/js",
//   },
//   img: {
//     src: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg,webmanifest,ico}",
//     watch: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg}",
//     dest: pathDest + "/img",
//   },
//   font: {
//     src: pathSrc + "/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
//     watch: pathSrc + "/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
//     dest: pathDest + "/font",
//   },
// };
>>>>>>> 06788fb43bd62ee4eeba94b50d02f9d657ba624d
