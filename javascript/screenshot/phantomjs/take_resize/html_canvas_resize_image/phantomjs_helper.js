(function( global, doc, undefined ) {
  'use strict';

  if(typeof global.callPhantom === 'function') {
    var MESSAGE_PAGE_LOADED     = 'page_loaded',
        MESSAGE_RESIZE_FINISHED = 'resize_finished';

    global.pageLoaded = function() {
      global.callPhantom( MESSAGE_PAGE_LOADED );
    };

    global.resizeFinished = function() {
      global.callPhantom( MESSAGE_PAGE_LOADED );
    };

    //---

    global.onload = global.pageLoaded;

  }

})( window, document );
