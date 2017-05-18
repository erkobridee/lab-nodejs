function myCleanup(){
  console.log('App specifc cleanup code');
};

var cleanup = require('./lib/processCleanup')(myCleanup);

// the following code is meant to be used to test the cleanup
//---

// prevents the program from closing instantly
process.stdin.resume();

function error(){
  console.log(error);
  var x = require('');
}

//---

console.log('program running...');

// try each of the following code once at time

// setTimeout(error, 2000);

// setTimeout(function(){ process.exit(3); }, 2000);

// type Ctrl + C to test forced exit
setTimeout(function(){ console.log('type Ctrl + C to test forced exit'); }, 3000);
