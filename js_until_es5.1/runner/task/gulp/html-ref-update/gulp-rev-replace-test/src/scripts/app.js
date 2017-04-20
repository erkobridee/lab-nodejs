(function(global, undefined) {
  'use strict';

  if(!global.app) throw new Error('Application app is not defined.');

  var hello = new app.Hello();

  console.log( hello.say() );
  console.log( hello.say(  'Erko Bridee'  ) );

  //---

  var sum = new app.Sum();

  console.log( sum.add( 1, 1) );
  console.log( sum.add( 101, 212) );

})(window);
