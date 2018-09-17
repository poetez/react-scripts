'use strict';

// Don't include @babel/preset-typescript and @babel/preset-react.
// They are included by default
module.exports = {
  plugins: [
    [require('@babel/plugin-proposal-object-rest-spread'), {
      loose: true,
      useBuiltIns: true,
    }],
    require('@babel/plugin-proposal-class-properties'),
    require('@babel/plugin-syntax-dynamic-import'),
  ],
};
