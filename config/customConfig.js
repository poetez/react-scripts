'use strict';

const {existsSync} = require('fs');
const paths = require('./paths');

const babelrc = (() => {
  const babelConfig = existsSync(paths.configBabel)
    ? (require(paths.configBabel) || {})
    : {};

  babelConfig.presets = [
    ...babelConfig.presets || [],
    require('@babel/preset-typescript'),
    require('@babel/preset-react'),
  ];

  return babelConfig;
})();

const css = (() => {
  let cssConfig = existsSync(paths.configCss)
    ? (require(paths.configCss) || [])
    : [];

  if (!Array.isArray(cssConfig)) {
    console.error('"config/css.js" doesn\'t return an array. It will be ignored');
    cssConfig = [];
  }

  return cssConfig;
})();

const aliases = (() => {
  let aliasesConfig = existsSync(paths.configAliases)
    ? (require(paths.configAliases) || {})
    : {};

  if (Object.prototype.toString.call(aliasesConfig) !== '[object Object]') {
    console.error('"config/aliases.js" doesn\'t return an object. It will be ignored');
    aliasesConfig = {};
  }

  return aliasesConfig;
})();

const resources = (() => {
  let resourcesConfig = existsSync(paths.configResources)
    ? (require(paths.configResources) || {})
    : {};

  if (Object.prototype.toString.call(resourcesConfig) !== '[object Object]') {
    console.error('"config/resources.js" doesn\'t return an object. It will be ignored');
    resourcesConfig = {};
  }

  return resourcesConfig;
})();

module.exports = {
  aliases,
  babelrc,
  css,
  proxy: existsSync(paths.configProxy) ? require(paths.configProxy) : undefined,
  resources,
};
