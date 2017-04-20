// processExit.js
// http://nodejs.org/api/process.html

process.on('exit', function() {
  
  process.nextTick(function () {
   console.log('This will not run');
  });

  console.log('about to finish');
});