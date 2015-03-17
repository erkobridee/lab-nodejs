var startTakeResize = new Date().getTime();
//---
var DEBUG = true;
var OUTPUT_BASE64 = false;
//------------------------------------------------------------------------------

// https://github.com/ariya/phantomjs/blob/master/examples/waitfor.js

var waitForDelay = 50; // ms

/**
 * Wait until the test condition is true or a timeout occurs. Useful for waiting
 * on a server response or for a ui change (fadeIn, etc.) to occur.
 *
 * @param testFx javascript condition that evaluates to a boolean,
 * it can be passed in as a string (e.g.: "1 == 1" or "$('#bar').is(':visible')" or
 * as a callback function.
 * @param onReady what to do when testFx condition is fulfilled,
 * it can be passed in as a string (e.g.: "1 == 1" or "$('#bar').is(':visible')" or
 * as a callback function.
 * @param timeOutMillis the max amount of time to wait. If not specified, 3 sec is used.
 */
function waitFor(testFx, onReady, timeOutMillis) {
    var maxtimeOutMillis = timeOutMillis ? timeOutMillis : 3000, //< Default Max Timout is 3s
        start = new Date().getTime(),
        condition = false,
        interval = setInterval(function() {
            if ( (new Date().getTime() - start < maxtimeOutMillis) && !condition ) {
                // If not time-out yet and condition not yet fulfilled
                condition = (typeof(testFx) === "string" ? eval(testFx) : testFx()); //< defensive code
            } else {
                if(!condition) {
                    // If condition still not fulfilled (timeout but condition is 'false')
                    console.log("error: 'waitFor()' timeout");
                    phantom.exit(1);
                } else {
                    // Condition fulfilled (timeout and/or condition is 'true')
                    if(DEBUG) console.log("'waitFor()' finished in " + (new Date().getTime() - start) + "ms.");
                    typeof(onReady) === "string" ? eval(onReady) : onReady(); //< Do what it's supposed to do once the condition is fulfilled
                    clearInterval(interval); //< Stop this interval
                }
            }
        }, waitForDelay); //< repeat check every waitForDelay
};

//------------------------------------------------------------------------------

var webpage = require('webpage'),
    system = require('system');

//------------------------------------------------------------------------------

// phantomjs take_resize.js SOURCE DEST 1024x768x0 250x200 --delay=500

var options = {
  src                  : system.args[1],
  dest                 : system.args[2],
  screenshotDimensions : '1024x768x0',
  resizeDimensions     : '250x200',
  screenshotDelay      : 300 // ms :: --delay=300
};

//---

if( !( options.src && options.dest ) ) {
  console.log( 'Usage: phantomjs take_resize.js URL|HTML_FILE IMAGE.png|--base64 [1024x768x0 250x200 --delay=300]' );
  finish();
}

if( options.dest === '--base64' ) {
  DEBUG = false;
  OUTPUT_BASE64 = true;
} else {
  checkDestFileName();
}

//------------------------------------------------------------------------------

(function checkOptionsParams() {
  var optParam = null;
  optParam = checkOptionParam( 'screenshotDimensions', 3 );
  if( !isScreenshotDelayParam( optParam ) ) {
    optParam = checkOptionParam( 'resizeDimensions', 4 );
    if( !isScreenshotDelayParam( optParam ) ) {
      isScreenshotDelayParam( checkOptionParam( 'screenshotDelay', 5 ) );
    }
  }
})();

function isScreenshotDelayParam( optParam ) {
  var flag = false;
  if( optParam.flag && optParam.name === 'delay' ) {
    flag = true;
    options['screenshotDelay'] = optParam.value || options['screenshotDelay'];
  }
  return false;
}

function checkOptionParam( optName, paramIdx ) {
  var optParam = checkFlagParam( system.args[paramIdx] );
  if( !optParam.flag ) {
    options[optName] = optParam.value || options[optName];
  }
  return optParam;
}

function checkFlagParam( value ) {
  var flagRegExp = /^-|--/,
      output = {
        flag  : false,
        value : value,
        name  : null
      };
  if( flagRegExp.test( value ) ) {
    output.flag = true;

    var equalsRegExp = /=/,
        strCleaned = value.replace(/-/g, '');

    if( equalsRegExp.test( strCleaned ) ) {
      var parts    = strCleaned.split( equalsRegExp );
      output.name  = parts[0];
      output.value = parts[1];
    } else {
      output.name  = strCleaned;
      output.value = true;
    }

  }
  return output;
}

//------------------------------------------------------------------------------

function checkDestFileName() {
  if( /png/.test( options.dest ) ) return;

  var check = options.dest.split(/\./),
      last = check.pop();

  if( !/jpg|jpeg|gif|pdf/.test(last) ) {
    check.push( last );
    if( !/png/.test(last) ) check.push('png');
  } else {
    check.push('png');
  }

  options.dest = check.join('.');
}

//------------------------------------------------------------------------------

function takeScreenShot() {
  var page = createNewPage( options.screenshotDimensions );

  page.open(options.src, pageOpenCallback(function() {
    if(DEBUG) console.log('page opened: ' + options.src);

    setWhiteBbColor( page );

    setTimeout(function() {
      renderImageBase64();
    }, options.screenshotDelay);
  }));

  function renderImageBase64() {
    var base64 = page.renderBase64('PNG');
    if(DEBUG) console.log('screenshot generated');
    // page.close();
    resizeImage( updateImageBase64Str( base64 ) )
  }

}

function pageOpenCallback( callback ) {

  return function( status ) {
    if( status === 'success' ) {
      callback();
    } else {
      console.log('error: fail to open ' + options.src);
      finish();
    }
  };

}

//------------------------------------------------------------------------------

function resizeImage( imageBase64 ) {
  var imageDimensions = getDimensionsObject( options.resizeDimensions );
  var page = createNewPage( imageDimensions );

  //--- @begin: page.content
  var pageStyle = '<style> body { margin-top: 0px; margin-left: 0px; } </style>';

  var imgStrTag = '<img id="toproad" src="' +
    imageBase64 +
    '" width="' +
    imageDimensions.width +
    '" height="' +
    imageDimensions.height +
    '" />';

  var pageContent = [
    pageStyle,
    imgStrTag
  ].join('');

  page.content = pageContent;
  //--- @end: page.content

  waitFor(function() {
    // Check in the page if a specific element is now visible
    return page.evaluate(function() {
      return document.getElementById("toproad").complete;
    });
  }, function() {
    if(DEBUG) console.log('screenshot resized to ' + options.resizeDimensions);
    renderImage();
  });

  function renderImage() {
    if( OUTPUT_BASE64 ) {
      var base64 = page.renderBase64('PNG');
      console.log( updateImageBase64Str( base64 ) );
    } else {

      // tempWriteBase64ToDist( page.renderBase64('PNG') );

      page.render( options.dest );
    }
    page.close();
    finish();
  }

}

// to tests use
function tempWriteBase64ToDist( imageBase64 ) {
  imageBase64 = updateImageBase64Str( imageBase64 );
  var fs = require('fs');
  var text64File = dest + '.base64.txt';
  fs.write( text64File, imageBase64, 'w' );
}

//------------------------------------------------------------------------------

function setWhiteBbColor( page ) {
  page.evaluate(function() {
    return document.body.bgColor = 'white';
  });
}

//---

var defaultDimensionWidth = 200;

function getDimensionsArray( dimensions ) {
  return dimensions.split(/x/);
}

function getDimensionsObject( dimensions ) {
  dimensions = getDimensionsArray( dimensions );
  var output = {};
  output.width = dimensions[0] || defaultDimensionWidth;
  output.height = dimensions[1] || output.width;
  output.top = dimensions[2] || 0;
  return output;
}

function checkDimensions( dimensions ) {
  if( isObject( dimensions ) ) {
    dimensions.width = dimensions.width || defaultDimensionWidth;
    dimensions.height = dimensions.height || dimensions.width;
    dimensions.top = dimensions.top || 0;
    return dimensions;
  } else {
    return getDimensionsObject( dimensions );
  }
}

function setDimensions( page, dimensions ) {
  dimensions = checkDimensions( dimensions );

  page.viewportSize = {
    width: dimensions.width,
    height: dimensions.height
  };

  page.clipRect = {
    left: 0,
    top: dimensions.top,
    width: dimensions.width,
    height: dimensions.height
  };
}

//---

function isObject( value ) {
  return value !== null && typeof value === 'object';
}

//---

function createNewPage( dimensions ) {
  var page = webpage.create();
  if( dimensions ) setDimensions( page, dimensions );
  return page;
}

//---

function updateImageBase64Str( imageBase64 ) {
  return 'data:image/png;base64,' + imageBase64;
}

//------------------------------------------------------------------------------

function start() {
  takeScreenShot();
}

function finish() {
  if(DEBUG) console.log("screenshot take and resize finished in " + (new Date().getTime() - startTakeResize) + "ms.");
  phantom.exit();
}

//------------------------------------------------------------------------------

start();


