// Expose all Gulp plugins found
var $ = module.exports = require('gulp-load-plugins')();

//---

$.path            = require('path');

$.rootPath = $.path.resolve( './' );

// [Gist] Better local require() paths for Node.js
// https://gist.github.com/branneman/8048520
$.rootRequire = function( name ) {
  return require( $.path.join( $.rootPath, name ) );
};

//---
// Expose some other modules

$.del             = require('del');
$.lazypipe        = require('lazypipe');
$.runSequence     = require('run-sequence');
$.browserSync     = require('browser-sync');
$.reload          = $.browserSync.reload;

$.open            = require('open');

  //--- local modules

$.pkg = $.rootRequire('package.json');

$.config = $.rootRequire('tools/config');

$.localip = $.rootRequire('tools/lib/localip');

//---

$.args = require('yargs').argv;

//---

$.is = {
  debug     : !!$.args.debug,
  release   : !!$.args.release,
  preview   : !!$.args.preview,
  cdn       : !!$.args.cdn
};

//---
// @begin: define output dir

(function() {

  var output = $.config.paths.dist || 'dist';
  if( $.is.cdn && $.is.release ) {
    output = $.path.join( output, $.pkg.name, $.pkg.version );
  }
  $.config.paths.outputDir = output;

})();

// @end: define output dir
//---
// @begin: check webserver configs

(function() {

  $.config
    .webserver = $.config.webserver || {};

  $.config
    .webserver
    .port = parseInt($.args.port, 10) || $.config.webserver.port || 3000;


  // middlewares array
  $.config
    .webserver
    .middlewares = [];

  // config proxies
  if( $.config.webserver.proxies ) {
    var proxyMiddleware = require('http-proxy-middleware'),
        proxyOptions;

    $.config
      .webserver
      .proxies.forEach(function(proxy) {

        proxyOptions = {
          host     : proxy.host || 'localhost',
          port     : proxy.port || 80,
          context  : checkContext(proxy.context),
          https    : proxy.https || false,
          xforward : proxy.xforward || false
        };

        $.config
          .webserver
          .middlewares
          .push(
            proxyMiddleware(
              proxyOptions.context,
              {
                target : mountTarget( proxyOptions ),
                secure : proxyOptions.https,
                xfwd   : proxyOptions.xforward
              }
            )
          );

      });

      console.log( JSON.stringify( proxyOptions, null, 2 ) );

  }

  function checkContext( context ) {
    if( !context ) return '/api';
    if( !/^\//.test(context) ) context = '/' + context;
    return context;
  }

  function mountTarget( proxyOptions ) {
    return (
      ( proxyOptions.https ? 'https://' : 'http://' ) +
      proxyOptions.host + ':' + proxyOptions.port
    );
  }

})();

// @end: check webserver configs
//---

/**
 * Log a message or series of messages using chalk's blue color.
 * Can pass in a string, object or array.
 */
$.log = function(msg) {
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.blue(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.blue(msg));
  }
};

$.onError = function(err) {
  $.log(err);
};

//---

$.projectInfoMsg = function() {
  $.log('');
  $.log('project: ' + $.pkg.name + ' v' + $.pkg.version);
  $.log('description: ' + $.pkg.description);
  $.log('');

  var msg = '';

  if( $.is.release ) {
    msg += ' release';

    if( $.is.cdn ) {
      msg += ' to CDN deploy';
    }

    $.log('>> ' + msg);
    $.log('');
  }
};

//---
