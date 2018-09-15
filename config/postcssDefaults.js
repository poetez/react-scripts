module.exports = () => [
  require('postcss-flexbugs-fixes'),
  require('autoprefixer')({
    browsers: [
      '> 5%',
      'not ie',
    ],
    flexbox: 'no-2009',
  }),
];
