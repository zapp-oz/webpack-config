const merge = require('webpack-merge').merge;
const basicConfig = require('./webpack.config');
const cleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

module.exports = merge(basicConfig, {
  mode: 'production',
  plugins: [new cleanWebpackPlugin()],
});
