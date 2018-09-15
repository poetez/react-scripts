'use strict';
const {existsSync} = require('fs');
const {resolve} = require('path');
const base = process.cwd();

const aliasesPath = resolve(base, 'config', 'aliases.js');
const babelrcPath = resolve(base, 'config', 'babel.js');
const cssPath = resolve(base, 'config', 'css.js');
const resourcesPath = resolve(base, 'config', 'resources.js');

module.exports = {
  aliases: existsSync(aliasesPath) ? require(aliasesPath) : {},
  babelrc: existsSync(babelrcPath) ? require(babelrcPath) : {},
  css: existsSync(cssPath) ? require(cssPath) : [],
  resources: existsSync(resourcesPath) ? require(resourcesPath) : {},
};
