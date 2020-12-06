const merge = require('webpack-merge').merge;
const basicConfig = require('./webpack.config');

module.exports = merge(basicConfig, {
  mode: 'development',
});
