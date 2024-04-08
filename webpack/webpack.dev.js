const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
  },
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ],
};
