/*
  branneman / better-nodejs-require-paths.md
  Better local require() paths for Node.js

  https://gist.github.com/branneman/8048520
*/

/*
global.rootRequire = function(name) {
  return require(__dirname + '/' + name);
};
*/

//---

require('./tools/gulp')
  .loadTasks('tools/gulp/tasks'); // load tasks config per file
