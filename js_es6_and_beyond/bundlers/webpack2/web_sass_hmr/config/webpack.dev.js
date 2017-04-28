const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

//---

const helpers = require('./helpers');

//---

module.exports = webpackMerge(commonConfig, {

  // https://webpack.js.org/configuration/devtool/
  // on google chrome developer tools, see on source tab the item webpack://
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
