
var someObject = {
  msg: 'initial value'
};

function sayHello(value) {
  console.log('hello world | value: ' + ( value || 'nothing') );
}

//---

(function(neededToProcess) {

  //var localSomeObject = neededToProcess; // ops value changed!
  var localSomeObject = JSON.parse( JSON.stringify( neededToProcess ) ); // copy/clone object

  // http://www.w3schools.com/jsref/met_win_settimeout.asp
  setTimeout( function run() {
    
    sayHello( localSomeObject.msg );

  }, 1000 ); // 1000 ms = 1 s

})(someObject);


sayHello();

someObject.msg = 'new value defined';

sayHello( someObject.msg );
