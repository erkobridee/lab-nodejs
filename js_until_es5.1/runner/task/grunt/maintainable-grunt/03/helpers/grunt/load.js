module.exports = function(grunt) {

  function loadFile(file) {
    require('./' + file)(grunt);
  }

  function load(files) {
    var arr, i;
    if(typeof files === 'string') {
      arr = [files];
    } else { arr = files; }
    for(i = arr.length-1; i > -1; i--) {

      loadFile(files[i]);
    }
  }

  //---

  load([
    'config/app',
    'config/connect',
    'config/jshint',
    'config/open',

    'tasks/helloworld'
  ]);


};
