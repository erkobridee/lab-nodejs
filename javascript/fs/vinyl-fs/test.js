var del   = require('del');
var map   = require('map-stream');
var fs    = require('vinyl-fs');

//---

var config = {
  src: 'src',
  dest: 'dist'
};

//---

var log = function(file, cb) {

  console.log(file.path);
  cb(null, file);

};

var run = function() {

  fs.src([
      config.src + '/**/*',
      '!' + config.src + '/**/*.noop'
    ])
    .pipe( map( log ) )
    .pipe( fs.dest( config.dest ) );

};

//---

del([ config.dest ], function (err, paths) {
  if(err) {
    console.log(err);
    console.log('');
  }

  if( paths ) {

    if(Object.prototype.toString.call( paths ) === '[object Array]') {
      paths = [].concat( paths );
    }

    if( paths.length > 0 ) {
      console.log('Deleted files/folders:\n', paths.join('\n'));
      console.log('');
    }
  }

  run();

});
