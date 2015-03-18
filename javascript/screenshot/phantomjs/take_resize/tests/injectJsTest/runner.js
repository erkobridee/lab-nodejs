var page = require('webpage').create();

var url = 'http://phantomjs.org',
    jsToInject = 'toInject/do.js';


//------------------------------------------------------------------------------

page.onConsoleMessage = function(msg, lineNum, sourceId) {
  var output = 'CONSOLE: ' + msg;
  if( lineNum ) {
    output += ' (from line #' + lineNum + ' in "' + sourceId + '")';
  }
  console.log( output );
};

page.onCallback = function( data ) {
  console.log( 'CALLBACK: ' + JSON.stringify( data, null, 2 ) );
};

//------------------------------------------------------------------------------

page.open(url, function(status) {
  console.log('page open...');

  if( status === 'success' ) {
    console.log( 'status: success' );

    if( page.injectJs( jsToInject ) ) {

      var title = page.evaluate(function() {
        // returnTitle is a function loaded from our do.js file
        return returnTitle();
      });

      console.log( title );

      page.evaluate(function( sendValueToPage ) {

        collectPageData( sendValueToPage );

      }, 'message sended from phantomjs');

      phantom.exit();

    } else {
      console.log( 'js not injected' );
      phantom.exit();
    }

  } else {
    console.log( 'status: fail' );
    phantom.exit();
  }
});
