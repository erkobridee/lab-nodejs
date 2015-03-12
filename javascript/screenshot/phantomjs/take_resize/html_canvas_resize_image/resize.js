/*
  [GitHub] viliusle/Hermite-resize
  https://github.com/viliusle/Hermite-resize

  demo
  http://jsfiddle.net/9g9Nv/96/
*/
(function( global, doc, undefined ) {
  'use strict';

  function resize( src, toWidth, toHeight ) {

    console.log('resize.js');
    // console.log( src );
    // console.log( global.resizeFinished );

    toWidth = toWidth || 250;
    toHeight = toHeight || 200;

    global.canvasRenderFinished = false;

    var canvas = doc.getElementById('render_canvas');
    var ctx = canvas.getContext('2d');

    // var img = new Image();
    var img = doc.getElementById('toLoadImage');
    img.crossOrigin = 'Anonymous'; //cors support
    img.onload = function(){
        console.log( 'img.onload' );

        var W = img.width;
        var H = img.height;
        canvas.width = W;
        canvas.height = H;
        ctx.drawImage(img, 0, 0); //draw image

        //resize manually
        resample_hermite(canvas, W, H, toWidth, toHeight);

        console.log( 'image resized' );
        global.canvasRenderFinished = true;

        if( global.resizeFinished ) global.resizeFinished();
    }

    img.src = src;
  }

  //---

  global.resize = resize;

})( window, document );
