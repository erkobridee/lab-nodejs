function sayHello( name ) {
  let msg = 'hello ' + ( name || 'world' );
  console.log( msg );
}

sayHello();
sayHello('Erko Bridee');