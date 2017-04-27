var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');

//---

var helpers = require('./helpers');

//---

module.exports = webpackMerge(commonConfig, {

  devtool : 'cheap-module-source-map',

  // https://webpack.js.org/configuration/dev-server/
  devServer : {
    port : helpers.METADATA.PORT,
    host : helpers.METADATA.HOST,
    open : true,
    historyApiFallback : true,
    hotOnly : true
  }

});
