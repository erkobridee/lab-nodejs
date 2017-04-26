var path = require('path');

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtratTextPlugin = require('extract-text-webpack-plugin');

var VENDORS_LIBS = [
  'jquery', 'moment'
];

// webpack config
module.exports = {
  entry : {
    vendors : VENDORS_LIBS,
    app : './src/app/index.js'
  },

  output : {
    path : path.resolve(__dirname, 'dist'),
    // output based on entry key + hash sum of the outputed file
    filename : 'scripts/[name].[chunkhash].js'
  },

  // define loaders used by webpack
  module : {
    rules : [
      // css
      {
        test : /\.css$/,
        /*
        // executes from the last to the first
        use : [
          'style-loader', // that keeps the css inside of app bundler js output
          'css-loader' // process css files
        ]
        */

        loader : ExtratTextPlugin.extract({
          fallback : 'style-loader', // inline output
          use : 'css-loader'
        })
      },

      // assets
      {
        test : /\.(jpg?g|png|gif|svg)$/,
        // loaders are applied from last one to first one in the array
        use : [
          {
            loader : 'url-loader',
            options : {
              // Convert images < 40k to base64 strings
              limit : 40000,
              // define images output directory and the name pattern
              name : 'assets/[hash].[ext]'
            }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },

  // extra behaviors defined to webpack
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      // helps webpack to split bundlers files
      names: ['vendors', 'manifest']
    }),
    new HtmlWebpackPlugin({
      // define our html template where the webpack will inject stuff
      template: 'src/index.html'
    }),
    new ExtratTextPlugin({ filename: 'styles/[name].[hash].css', allChunks: true }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
