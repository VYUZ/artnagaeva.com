<<<<<<< HEAD
import webpack from "webpack-stream";

export const js = () => {
  return app.gulp
    .src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(
      webpack({
        mode: app.isBuild ? "production" : "development",
        output: {
          filename: "main.min.js",
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream());
};
=======
import webpack from "webpack-stream";

export const js = () => {
  return app.gulp
    .src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(
      webpack({
        mode: app.isBuild ? "production" : "development",
        output: {
          filename: "main.min.js",
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream());
};
>>>>>>> 06788fb43bd62ee4eeba94b50d02f9d657ba624d
