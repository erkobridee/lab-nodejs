
var phantom = require( 'node-phantom-simple' );

//----

// based on:
// https://github.com/orangenpresse/grunt-phantomjs-screenshot/blob/master/bin/Screenshooter.js
var ScreenShooter = (function() {
  function ScreenShooter() {};

  ScreenShooter.prototype.init = function init( options, callback, done ) {
    this.options = options || {};
    this.done = done;

    if( !this.options.viewport ) {
      this.options.viewport = '1024x768';
    }

    if( !this.options.delay ) {
      this.options.delay = 300;
    }

    if( !this.options.closeDelay ) {
      // // Workaround for https://github.com/ariya/phantomjs/issues/11084
      this.options.closeDelay = 1000;
    }

    var createOptions = {};
    if( this.options.parameters ) {
      createOptions.parameters = this.options.parameters;
    }

    return phantom.create( this.getCreateCallback( callback ), createOptions );
  };

  ScreenShooter.prototype.getCreateCallback = function getCreateCallback( callback ) {
    return (function( _this ) {
      return function( err, ph ) {
        if( err === null ) {
          _this.ph = ph;
          return callback();
        } else {
          var phantomJsCreateError = new Error( 'PhantomJsCreateError: ' + err );
          return callback( phantomJsCreateError );
        }
      };
    })(this);
  };

  ScreenShooter.prototype.getPageCallback = function getPageCallback( callback ) {
    return (function( _this ) {
      return function ( err, page ) {
        if( err === null ) {
          return _this.setViewport( page, _this.options.viewport, function() {
            return callback( page );
          });
        } else {
          var pageCreateError = new Error( 'PageCreateError: ' + err );
          return _this.setScreenshotDone( null, pageCreateError );
        }
      };
    })(this);
  };

  ScreenShooter.prototype.setViewport = function setViewport( page, viewport, callback ) {
    var resolution = viewport.split(/x/);
    return page.set('viewportSize', {
      width  : resolution[0],
      height : resolution[1]
    }, callback);
  };

  ScreenShooter.prototype.getPageOpenCallback = function getPageOpenCallback( callback ) {
    return (function( _this ) {
      return function( err, status ) {
        if( err === null && status === 'success' ) {
          return callback();
        } else {
          var outputError;
          if( err !== null ) {
            outputError = new Error( 'PageOpenError: ' + err.msg );
          } else {
            outputError = new Error( 'PageOpenError: ' + status );
          }
          return _this.setScreenshotDone( null, outputError );
        }
      };
    })( this );
  };

  ScreenShooter.prototype.setScreenshotDone = function setScreenshotDone( file, err ) {
    err = err || null;
    var result = null;
    if( file ) {
      result = '' + file + ' saved';
    }
    return setTimeout((function( _this ) {
      return function() {
        _this.ph.exit();
        return _this.done( err, result );
      };
    })(this), this.options.closeDelay);
  };

  ScreenShooter.prototype.setBackgroundColor = function setBackgroundColor( page ) {
    return page.evaluate(function() {
      /* global document */
      document.body.bgColor = 'white';
    });
  };

  ScreenShooter.prototype.takeScreenShot = function takeScreenShot( src, dest ) {
    return this.ph.createPage( this.getPageCallback( (function( _this ) {
      return function( page ) {
        return page.open( src, _this.getPageOpenCallback(function() {
          _this.setBackgroundColor( page );
          return setTimeout(function() {

            // TODO: review
            dest = process.cwd() + '/' + dest;

            page.render( dest );

            _this.setScreenshotDone( dest );

          }, _this.options.delay);
        }) );
      };
    })( this )));
  };

  return ScreenShooter;
})();

//---

var options = {};
/*
var options = {
  parameters: {
    'proxy'      : 'ip_host:port',
    'proxy-auth' : 'user:pass'
  }
};
*/

var screenshooter = new ScreenShooter();

screenshooter.init(options, takeScreenShot, done);

function takeScreenShot( err ) {
  if( err ) return console.log( err );

  var src = 'http://google.com',
      dest = 'screen/google.png';

  screenshooter.takeScreenShot( src, dest );
}

function done( err, result ) {
  if( err ) return console.log( err );

  console.log( result );
}
