/*
  [GitHub] viliusle/Hermite-resize
  https://github.com/viliusle/Hermite-resize

  demo
  http://jsfiddle.net/9g9Nv/96/
*/
(function( global, doc, undefined ) {
  'use strict';

  function resize( src, toWidth, toHeight ) {
    toWidth = toWidth || 250;
    toHeight = toHeight || 200;

    var canvas = doc.getElementById('render_canvas');
    var ctx = canvas.getContext('2d');

    var img = new Image();
    img.crossOrigin = 'Anonymous'; //cors support
    img.onload = function(){
        var W = img.width;
        var H = img.height;
        canvas.width = W;
        canvas.height = H;
        ctx.drawImage(img, 0, 0); //draw image

        //resize manually
        resample_hermite(canvas, W, H, toWidth, toHeight);

        if( global.resizeFinished ) global.resizeFinished();
    }

    img.src = src;
  }

  //---

  global.resize = resize;

})( window, document );
