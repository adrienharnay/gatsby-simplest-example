const path = require('path');

const HelloWorldComponent = path.resolve(__dirname, './src/index.js');

exports.createPages = ({ actions: { createPage } }) =>
  createPage({
    path: '/hello',
    component: HelloWorldComponent,
  });
