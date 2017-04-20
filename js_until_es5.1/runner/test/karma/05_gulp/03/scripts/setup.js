var async_exec = require('child_process').exec;

// http://documentup.com/arturadib/shelljs
async_exec('npm install shelljs', function (err, stdout, stderr) {
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

  if(!which('bower')) {
    echo('Bower is missing...taking care of that now.');
    cmd = sudoStr + 'npm install --global bower';
    echo(cmd); exec(cmd);
  }
  echo('bower --version ');
  echo(exec('bower --version').output);

  if(!which('gulp')) {
    echo('gulp is missing...taking care of that now.');
    cmd = sudoStr + 'npm install --global gulp';
    echo(cmd); exec(cmd);
  }

  echo('----------------------------------------');

  echo('Installing node dependencies...\n');
  exec('npm install');

  echo('Installing bower components...\n');
  exec('bower install');

  echo('\nOK!');
});
