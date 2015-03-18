var pathPrefix = require('./path_prefix');

module.exports = function( server ) {

  require('./root')( server );

  pathPrefix( 'rest', server, function( server, done ) {
    require('./bookmarks')( server );
    done();
  } );

};
