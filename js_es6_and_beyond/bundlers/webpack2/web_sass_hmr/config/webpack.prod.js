const ExtratTextPlugin = require('extract-text-webpack-plugin');

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

//---

const helpers = require('./helpers');

helpers.METADATA.HMR = false;

//---

// https://github.com/survivejs/webpack-merge#merging-with-strategies
module.exports = webpackMerge.strategy({
  'module.rules' : 'replace'
})(commonConfig, {

  // define loaders used by webpack
  module : {
    rules : [

      // @begin: assets
      {
        test : /\.(jpg?g|png|gif|svg)$/,
        // loaders are applied from last one to first one in the array
        use : [
          {
            loader : 'url-loader',
            options : {
              // Convert images < 20k to base64 strings
              limit : 20000,
              // define images output directory and the name pattern
              name : 'assets/[hash].[ext]'
            }
          },
          'image-webpack-loader'
        ]
      },
      // @end: assets

      // @begin: css
      {
        test : /\.css$/,
        loader : ExtratTextPlugin.extract({
          fallback : 'style-loader', // inline output
          use : 'css-loader'
        })
      },
      // @end: css

      // @begin: sass
      {
        test : /\.(sass|scss)$/,
        loader : ExtratTextPlugin.extract({
          fallback : 'style-loader', // inline output
          use : 'css-loader!sass-loader'
        })
      }
      // @end: sass
    ]
  },

  // extra behaviors defined to webpack
  plugins: [
    new ExtratTextPlugin({ filename: 'styles/[name].[hash].css', allChunks: true })
  ]

});
