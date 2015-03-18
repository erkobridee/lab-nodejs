/*
  http://hapijs.com/tutorials/plugins

  http://hapijs.com/api#serverregisterplugins-options-callback

  https://stackoverflow.com/questions/27871324/hapijs-global-path-prefix
*/

module.exports = function( prefix, server, cb ) {

  var plugin = function( server, options, next ) {
    cb( server, next )
  };

  plugin.attributes = {
    name: 'path:prefix:' + prefix
  };

  //---

  server.register({
    register: plugin,
  }, {
    routes: {
      prefix: '/' + prefix
    }
  }, function( error ) {
    if( error ) {
      console.log('Failed to define path prefix :' + prefix);
    }
  });

};
