const webpackMerge = require('webpack-merge');
const commonConfig = require('./build-utils/webpack.common.js');

module.exports = (env={}) => {
  
  let buildConfig = {};
  if (env.env && /^(dev|prod)$/.test(env.env)) {
    buildConfig = require(`./build-utils/webpack.${env.env}.js`);
  }

  const mergedConfig = webpackMerge(commonConfig, buildConfig);

  return mergedConfig;
}
