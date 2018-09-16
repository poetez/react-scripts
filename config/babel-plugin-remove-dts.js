'use strict';

const pattern = /\.\/\S+\.d/;

module.exports = () => ({
  visitor: {
    ImportDeclaration(path) {
      if (path.node.source && pattern.test(path.node.source.value)) {
        path.remove();
      }
    },

    ExportDeclaration(path) {
      if (path.node.source && pattern.test(path.node.source.value)) {
        path.remove();
      }
    }
  },
});
