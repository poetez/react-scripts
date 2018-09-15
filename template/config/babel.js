'use strict';

module.exports = {
  presets: [require('@babel/preset-typescript')],
  plugins: [
    require('@babel/plugin-proposal-object-rest-spread'), {
      loose: true,
      useBuiltIns: true,
    },
    require('@babel/plugin-syntax-dynamic-import'),
  ],
};
