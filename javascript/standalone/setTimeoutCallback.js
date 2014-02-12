// http://www.w3schools.com/jsref/met_win_settimeout.asp

function sayHello(msg) {
  console.log('hello world ' + (msg || '') );
}

setTimeout( sayHello('from callback'), 1000 ); // 1000 ms = 1 s

sayHello();