var async_exec = require('child_process').exec

// http://documentup.com/arturadib/shelljs
async_exec('npm install shelljs --save-dev', function (err, stdout, stderr) {
  require('shelljs/global');

  var oscheck = require('./lib/oscheck');

  var sudoStr =  (oscheck.isLinux || oscheck.isMac) ? 'sudo ' : '';
  var cmd = '';

  echo('About to setup environment');
  echo('It works if it finishes with OK');

  echo('----------------------------------------');

  if(!which('phantomjs')) {
    echo('PhantomJS is missing...taking care of that now.');
    cmd = sudoStr + 'npm install --global phantomjs';
    echo(cmd); exec(cmd);
  }
  echo('phantomjs --version ');
  echo(exec('phantomjs --version').output);

  if(!which('testem')) {
    echo('Test\'em is missing...taking care of that now.');
    cmd = sudoStr + 'npm install --global testem';
    echo(cmd); exec(cmd);
  }
  echo('testem --version ');
  echo(exec('testem --version').output);

  if(!which('bower')) {
    echo('Bower is missing...taking care of that now.');
    cmd = sudoStr + 'npm install --global bower';
    echo(cmd); exec(cmd);
  }
  echo('bower --version ');
  echo(exec('bower --version').output);

  echo('----------------------------------------');

  echo('Installing node dependencies...');
  exec('npm install');

  echo('Installing bower components...');
  exec('bower install');

  echo('\nOK!');
});
