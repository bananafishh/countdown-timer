const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = ({ env }) => {
  const currentConfig = require(`./webpack.${env}.js`);

  return merge(commonConfig, currentConfig);
};
