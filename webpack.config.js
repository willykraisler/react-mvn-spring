var packageJSON = require('./package.json');
var path = require('path');
var webpack = require('webpack');

const PATHS = {
  build: path.join(__dirname, 'src', 'main', 'webapp', 'assets')
};

module.exports = {
  entry: './src_js/main.js',
  output: {
    path: PATHS.build,
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { 
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        loader: "babel-loader"
      }
    ]
  }
  
    
};
