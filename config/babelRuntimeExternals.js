'use strict';

const {camelCase, pascalCase} = require('change-case');

const coreJsBasicPattern = /\/core-js\//;
const coreJsBuiltInPattern = /\/core-js\/(promise|symbol)/;
const coreJsObjectPattern = /\/core-js\/object\/(.*)/;
const coreJsReflectPattern = /\/core-js\/reflect\/(.*)/;
const coreJsSymbolPattern = /\/core-js\/symbol\/(.*)/;

const replaceObjectMethod = (request) => {
  const [, m] = coreJsObjectPattern.exec(request);
  let method = camelCase(m);

  if (request.includes('lookup-getter') || request.includes('lookup-setter')) {
    method = `__${method}__`;
  }

  return `Object.${method}`;
};

const replaceBuiltIn = (request) => {
  const [, b] = coreJsBuiltInPattern.exec(request);

  return pascalCase(b);
};

const replaceReflect = (request) => {
  const [, m] = coreJsReflectPattern.exec(request);

  return `Reflect.${camelCase(m)}`;
};

const replaceSymbol = (request) => {
  const [, m] = coreJsSymbolPattern.exec(request);

  return `Symbol.${camelCase(m)}`;
};

const isIterable = `const isIterable = o => o == null ? false : typeof obj[Symbol.iterator] === 'function';`;
const getIterator = `const getIterator = o => o[Symbol.iterator];`;

module.exports = function replaceBabelRuntimeCoreJs(context, request, callback) {
  if (coreJsBasicPattern.test(request)) {
    if (coreJsObjectPattern.test(request)) {
      return callback(null, replaceObjectMethod(request));
    }

    if (coreJsBuiltInPattern.test(request)) {
      if (coreJsSymbolPattern.test(request)) {
        return callback(null, replaceSymbol(request));
      }
      return callback(null, replaceBuiltIn(request));
    }

    if (coreJsReflectPattern.test(request)) {
      return callback(null, replaceReflect(request));
    }

    if (request.includes('is-iterable')) {
      return callback(null, isIterable);
    }

    if (request.includes('get-iterator')) {
      return callback(null, getIterator);
    }

    return callback();
  }

  return callback();
};
