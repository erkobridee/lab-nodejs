// based on
// http://docs.nodejitsu.com/articles/child-processes/how-to-spawn-a-child-process

var childProcess = require('child_process')
  , ls
;

ls = childProcess.exec('ls -lh', function (error, stdout, stderr) {
  if (error) {
    console.log(error.stack);
    console.log('Error code: ' + error.code);
    console.log('Signal received: ' + error.signal);
  }
  
  console.log('\nChild Process STDOUT: ' + stdout);
  if(stderr) console.log('\nChild Process STDERR: ' + stderr);
});

ls.on('exit', function (code) {
  console.log('Child process exited with exit code ' + code);
});