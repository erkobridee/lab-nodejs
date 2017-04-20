/*
  TODO: compile NodeMsgStdin.java

  javac NodeMsgStdin.java
*/

var spawn = require('child_process').spawn
  , java    = spawn('java', ['NodeMsgStdin'])
;

java.stdout.on('data', function (data) {
  console.log('stdout: \n' + data);
});

java.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

java.on('exit', function (code) {
  console.log('child process exited with code ' + code);
});

//---

setTimeout(function() {
  console.log('run');
  java.stdin.write('Hello Java o/\n');

  java.stdin.write('exit\n');

  java.stdin.end();
}, 1000);