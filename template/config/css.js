'use strict';

const isProd = process.env.NODE_ENV === 'production';

module.exports = [{
  // to use loader that is different from "postcss-loader"
  // install this loader and add following line (e.g. "sass-loader"):
  // loader: require.resolve('sass-loader')
  pattern: {
    module: /\.pcss/,
    global: /\.global\.pcss/,
  },
  // you can use any option that is allowed for your loader
  options: {
    plugins: () => [
      require('autoprefixer'),
      require('postcss-import')({
        resolve: id => (id.charAt(0) === '~' ? id.slice(1) : id),
      }),
      require('postcss-preset-env')({
        browsers: '> 5%',
        features: {
          'nesting-rules': true,
        },
      }),
      ...(
        isProd ? [
          require('cssnano')({
            autoprefixer: false,
          }),
        ] : []
      ),
    ],
  },
}];
