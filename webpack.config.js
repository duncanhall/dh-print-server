'use strict';

var webpack = require('webpack');

var config = {
  entry: {
    app: ['webpack/hot/dev-server', './public/jsx/main.jsx'],
    vendors: ['react', 'bootstrap' ,'bootstrap.css']
  },
  output: {
    path: './public',
    filename: 'js/bundle.js',
    publicPath: 'http://localhost:8080/'
  },

  addVendor: function (name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp('^' + name + '$'));
  },

  resolve: { alias: {} },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js')
  ],

  module: {
    noParse: [],
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  }
};

config.addVendor('bootstrap', __dirname + '/public/lib/bootstrap.min.js');
config.addVendor('bootstrap.css', __dirname + '/public/css/bootstrap.min.css');

module.exports = config;