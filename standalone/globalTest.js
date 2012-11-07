
// look at mainModule inside global.mainModule.exports array
module.exports = function test1() {
  return 'test';
};

// not finded inside global.mainModule.exports array
exports = function test2() {
  return /[a-z]/i
};

// added at end of global object
global.App = {
  att1: 'test att1',
  att2: 'test att2'
};

console.log('\n---GLOBAL: START---------------------------------------');
console.log(global);
console.log('\n---GLOBAL: END-----------------------------------------');

console.log('\n\tsame object? (GLOBAL === ROOT) ' + (global === root));

console.log('\n\t__dirname = shortcut to global.env.PWD');

console.log('\n\t__dirname : where i\'m?\n');
console.log( __dirname );

console.log('\n---END-------------------------------------------------\n');
