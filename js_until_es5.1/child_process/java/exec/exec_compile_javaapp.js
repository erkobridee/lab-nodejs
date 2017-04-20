var childProcess = require('child_process')
  , javac
;

javac = childProcess.exec('javac HelloNodeWorld.java', function (error, stdout, stderr) {
  if (error) {
    console.log(error.stack);
    console.log('Error code: ' + error.code);
    console.log('Signal received: ' + error.signal);
  }

  console.log('\nChild Process STDOUT: ' + stdout);
  if(stderr) console.log('\nChild Process STDERR: ' + stderr);
});

javac.on('exit', function (code) {
  console.log('Child process exited with exit code '+code);
});