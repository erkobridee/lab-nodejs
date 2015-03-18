module.exports = function( server ) {

  var ctrls = require('./controllers');

  var initPath = '/rest/bookmarks';

  server.route({
    method: 'GET',
    path: initPath + '/{id?}',
    handler: ctrls.get
  });

  server.route({
    method: 'POST',
    path: initPath,
    handler: ctrls.insert
  });

  server.route({
    method: 'PUT',
    path: initPath + '/{id}',
    handler: ctrls.update
  });

  server.route({
    method: 'DELETE',
    path: initPath + '/{id}',
    handler: ctrls.remove
  });

};
