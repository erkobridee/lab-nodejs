# global docs
# http://nodejs.org/api/globals.html

# look at mainModule inside global.mainModule.exports array
module.exports = test1: () -> 'test'

# not finded inside global.mainModule.exports array
exports = test2: () -> /[a-z]/i

# added at end of global object
global.App = 
  att1: 'test att1'
  att2: 'test att2'


console.log '\n---GLOBAL: START---------------------------------------'
console.log global
console.log '\n---GLOBAL: END-----------------------------------------'

console.log '\n\tsame object? (GLOBAL === ROOT) ' + (global is root)

console.log '\n\t__dirname = The name of the directory that the currently executing script resides in.'

console.log '\n\t__dirname : where i\'m?\n'
console.log  __dirname 

console.log '\n---END-------------------------------------------------\n'