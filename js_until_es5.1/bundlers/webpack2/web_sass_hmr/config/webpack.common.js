var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//---

var helpers = require('./helpers');

//---

var htmlPluginConfig = (function defineHtmlConfig(){
  var config = {
    // define our html template where the webpack will inject stuff
    template : 'src/index.html'
  };

  if(helpers.METADATA.ENV === 'production'){
    config.minify = { // the html content
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true
    };
  }

  return config;
})();

//---

// webpack common config
module.exports = {
  entry : {
    vendors : helpers.getNPMPackageIds(),
    app : './src/app/index.js'
  },

  output : {
    path : helpers.root('dist'),
    // output based on entry key + hash sum of the outputed file
    filename : 'scripts/[name].[hash].js'
  },

  // define loaders used by webpack
  module : {
    rules : [

      // @begin: assets
      {
        test : /\.(jpg?g|png|gif|svg)$/,
        // loaders are applied from last one to first one in the array
        use : [
          'file-loader?name=assets/[hash].[ext]',
          'image-webpack-loader'
        ]
      },
      // @end: assets

      // @begin: css
      {
        test : /\.css$/,
        // executes from the last to the first
        use : [
          'style-loader', // that keeps the css inside of app bundler js output
          'css-loader' // process css files
        ]
      },
      // @end: css

      // @begin: sass
      {
        test : /\.(sass|scss)$/,
        // executes from the last to the first
        use : [
          'style-loader', // that keeps the css inside of app bundler js output
          'css-loader', // process css files
          'sass-loader' // process sass files
        ]
      }
      // @end: sass
    ]
  },

  // extra behaviors defined to webpack
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      // helps webpack to split bundlers files
      names : ['vendors', 'manifest']
    }),

    new HtmlWebpackPlugin(htmlPluginConfig),

    new webpack.DefinePlugin({
      'ENV' : JSON.stringify(helpers.METADATA.ENV),
      'HMR' : helpers.METADATA.HMR,
      'process.env' : {
        'ENV' : JSON.stringify(helpers.METADATA.ENV),
        'NODE_ENV' : JSON.stringify(helpers.METADATA.ENV),
        'HMR' : helpers.METADATA.HMR
      }
    })
  ]
};
