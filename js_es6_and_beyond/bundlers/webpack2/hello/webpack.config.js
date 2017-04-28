const path = require('path');

const config = {
  entry : './src/index.js',
  output : {
    path : path.resolve( __dirname, 'dist' ),
    filename : 'bundle.js'
  },
  module : {
    rules : [
      {
        use : 'babel-loader',
        test : /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
