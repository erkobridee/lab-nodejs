function noop(){}

// capture process exits and call app specific cleanup function
function cleanup(callback){
  callback = callback || noop;

  // app cleanup code
  process.on('cleanup', callback);

  // do app specific cleaning before exiting
  process.on('exit', function(){
    process.emit('cleanup');
  });

  // catch ctrl + c event and exit normally
  process.on('SIGINT', function(){
    console.log('Ctrl + C');
    process.exit(2);
  });

  // catch uncaught exceptions, trace then exit normally
  process.on('uncaughtException', function(e){
    console.log('uncaught exception:');
    console.log(e.stack);
    process.exit(99);
  });
}

module.exports = cleanup;
