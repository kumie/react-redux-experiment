'use strict';

import gulp from 'gulp';
import jasmine from 'gulp-jasmine';
import webpackStream from 'webpack-stream';

const bundler = () => {
  return webpackStream({
    output: {
      filename: 'app.js'
    },
    debug: true,
    module: {
      loaders: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          query: {
            presets: ['es2015', 'react', 'stage-2']
          }
        },
        { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
        { test: /\.json$/, loader: 'json' }
      ]
    },
    devtool: '#source-map',
    watch: true
  });
};

gulp.task('build', () => {
  return gulp.src('index.js')
      .pipe(bundler())
      .pipe(gulp.dest('dist/js/'));
});

gulp.task('default', ['build']);

gulp.task('test', () => {
  return gulp.src('test/index.js')
      .pipe(jasmine({
        verbose: true,
        includeStackTrace: true
      }));
});
