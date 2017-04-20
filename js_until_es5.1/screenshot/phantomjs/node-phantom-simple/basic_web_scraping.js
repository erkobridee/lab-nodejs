
var siteUrl     = 'http://tilomitra.com/repository/screenscrape/ajax.html',
    includeJs   = 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js',
    delay       = 5000;

//---

var phantom = require( 'node-phantom-simple' );

phantom.create( onPhantomCreate );
/*
phantom.create( onPhantomCreate, {
  parameters: {
    'proxy'      : 'ip_host:port',
    'proxy-auth' : 'user:pass'
  }
} );
*/

function onPhantomCreate( err, ph ) {

  return ph.createPage(function( err, page ) {

    return page.open( siteUrl, function( err, status ) {

      console.log( 'opened site? ', status );

      page.includeJs( includeJs, function( err ) {

        //jQuery Loaded.
        //Wait for a bit for AJAX content to load on the page. Here, we are waiting 5 seconds.
        setTimeout(function() {

          return page.evaluate(function() {
            //Get what you want from the page using jQuery. A good way is to populate an object with all the jQuery commands that you need and then return the object.
            var h2Arr = [],
            pArr = [];
            $('h2').each(function() {
              h2Arr.push($(this).html());
            });
            $('p').each(function() {
              pArr.push($(this).html());
            });

            return {
              h2: h2Arr,
              p: pArr
            };

          }, function( err, result ) {

            console.log( result );
            ph.exit();

          });

        }, delay );

      });

    });

  });

}
