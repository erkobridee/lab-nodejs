(function( global, doc, undefined ) {

  console.log( 'from toInject/do.js file' );

  global.returnTitle = function() {
    return doc.title;
  };

  // not executed
  global.onload = function() {
    console.log( 'page onload event' );
  };

  if(typeof global.callPhantom === 'function') {

    global.collectPageData = function( valueFromPhantom ) {
      var outputObject = {
        valueFromPhantom: valueFromPhantom,
        document: {
          title: doc.title,
          width: doc.body.clientWidth,
          height: doc.body.clientHeight,
          scrollTop: doc.body.scrollTop
        }
      };
      global.callPhantom( outputObject );
    };


  }

})( window, document );


