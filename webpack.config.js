// This file configures webpack to run on the production files
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const page = require('./page.json');

module.exports = {
  cache: true,
  entry: page,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename: 'js/[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['transform-class-properties']
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader'),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css', {
      allChunks: true,
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
