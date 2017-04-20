var spawn = require('child_process').spawn
  , ls    = spawn('ls', ['-lh', '/usr'])
;

ls.stdout.on('data', function (data) {
  console.log('stdout: \n' + data);
});

ls.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

ls.on('exit', function (code) {
  console.log('child process exited with code ' + code);
});