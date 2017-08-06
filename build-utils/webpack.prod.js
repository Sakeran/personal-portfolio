const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const prodConfig = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [require('autoprefixer')]
              }
            }
          ],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin('styles.css'),
    new webpack.optimize.UglifyJsPlugin()
  ],
};

module.exports = prodConfig;
