var path = require('path'),
    rootDir = path.dirname(require.main.filename);

module.exports = function( server ) {

  server.route({
    method: 'GET',
    path:'/',
    handler: function (request, reply) {
     reply.file( path.join( rootDir, 'public', 'index.html' ) );
    }
  });

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: path.join( rootDir, 'public' ),
        listing: true
      }
    }
  });

};
