const devConfig = {
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  }
};

module.exports = devConfig;
