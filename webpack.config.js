const path = require('path');
const { pathToFileURL } = require('url');
//const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWepackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    port: 8080,
    proxy: {
      '/': {
        target: 'http://localhost:3000/',
      },
    },
    hot: true,
    inline: true,
    open: true,
  }, // end of devServer
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  }, //end of output
  resolve: {
    extensions: ['.js', '.jsx'],
  }, // end of resolve
  plugins: [
    new HtmlWepackPlugin({
      template: './index.html',
    }),
    new MiniCssExtractPlugin(),
  ], //end of plugins
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              {
                plugins: [
                  '@babel/plugin-proposal-class-properties',
                  '@babel/plugin-transform-runtime',
                ],
              },
            ],
          },
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ], //end of rules
  }, //end of module
};
