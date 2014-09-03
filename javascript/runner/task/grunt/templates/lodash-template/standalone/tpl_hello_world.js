
var _ = require('lodash-node'),
    path = require('path'),
    Q = require('q'),
    fs = require('q-io/fs'),
    templatesDir = path.join(process.cwd(), '..', '/templates'),
    templateFile = path.join(templatesDir, 'hello_world.jst');

//---

console.log( templatesDir );
console.log( templateFile );

//---

var templateValues = {
  greeting: 'world'
};

//---

/*
fs.read(templateFile).then(function(content) {

  return _.template(content);

}).then(function(tpl) {

  var result = tpl( templateValues );

  console.log( result );

});
*/

//---

var tplCache = Object.create(null);
var getTpl = function(name) {
  var deferred =  Q.defer();

  if(!tplCache[name]) {
    var tplFileName = path.join(templatesDir, name + '.jst');

    fs.read(tplFileName)
      .then(function(content) {
        console.log(content);

        tplCache[name] = _.template(content);
        deferred.resolve(tplCache[name]);
      })
      .catch(function(error) {
        deferred.reject(error);
      });


  } else {
    deferred.resolve(tplCache[name]);
  }

  return deferred.promise;
};

//---

getTpl('hello_world')
  .then(function(tpl) {

    console.log(tpl(templateValues));

  });



