define(
// require.js dependency injection
[
  'jquery',
  './utils/Hello',
  './utils/Sum'
],

// require.js module scope
function($, Hello, Sum) {
  'use strict';

  console.log( 'Application Running...' );

  var p, ul, li;
  var htmlContent = $('<div/>');

  htmlContent.append( $('<p/>').append('Application Running...') );

  //-- Hello
  p = $('<p/>').append( 'say hello...' );
  htmlContent.append( p );
  ul = $('<ul/>');
  p.append( ul );

  var hello = new Hello();

  ul.append( $('<li/>').append( hello.say() ) );
  ul.append( $('<li/>').append( hello.say(  'Erko Bridee'  ) ) );

  p = ul = li = null;

  //--- Sum

  p = $('<p/>').append( 'sum a + b' );
  htmlContent.append( p );
  ul = $('<ul/>');
  p.append( ul );

  var sum = new Sum();

  ul.append( $('<li/>').append( sum.add( 1, 1) ) );
  ul.append( $('<li/>').append( sum.add( 101, 212) ) );

  p = ul = li = null;

  //---

  $('#to_jquery').append( htmlContent );

});
