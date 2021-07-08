const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: { port: 3000 },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      { test: /\.css?$/, loader: 'css-loader' },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
};
