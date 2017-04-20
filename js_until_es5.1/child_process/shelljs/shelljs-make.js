require('shelljs/make');

target.all = function() {
  target.helloWorld();
  target.pwd();
}

target.helloWorld = function() {
  echo('shelljs make - hello world');
}

target.pwd = function() {
  //cd(__dirname);
  echo( pwd() );
}
