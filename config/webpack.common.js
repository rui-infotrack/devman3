var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    app: helpers.root('client', 'index.js'),
    vendor: helpers.root('client', 'vendor.js')
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus'
        )
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css?sourceMap')
      },
      {
        test: /\.(js|jsx)$/,
        include: helpers.root('client'),
        loaders: [
          'babel-loader'
        ]
      }
    ],
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: helpers.root('client'),
        loader: 'eslint-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    })
  ]
};
