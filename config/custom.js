'use strict';
const {existsSync} = require('fs');
const {resolve} = require('path');
const base = process.cwd();

const aliasesPath = resolve(base, 'config', 'aliases.js');
const babelrcPath = resolve(base, 'config', 'babel.js');
const cssPath = resolve(base, 'config', 'css.js');
const resourcesPath = resolve(base, 'config', 'resources.js');

const babelrc = (() => {
  const babelConfig = existsSync(babelrcPath) ? require(babelrcPath) : {};

  babelConfig.presets = [
    ...babelConfig.presets || [],
    require('@babel/preset-typescript'),
    require('@babel/preset-react'),
  ];

  return babelConfig;
})();

const css = (() => {
  let cssConfig = existsSync(cssPath) ? require(cssPath) : [];

  if (!Array.isArray(cssConfig)) {
    console.error('"config/css.js" doesn\'t return an array. It will be ignored');
    cssConfig = [];
  }

  return cssConfig;
})();

module.exports = {
  aliases: existsSync(aliasesPath) ? require(aliasesPath) : {},
  babelrc,
  css,
  resources: existsSync(resourcesPath) ? require(resourcesPath) : {},
};
