var ctrl = require('../controllers/bookmarks');

module.exports = function( server ) {

  var initPath = '/rest/bookmarks';

  server.route({
    method: 'GET',
    path: initPath + '/{id?}',
    handler: ctrl.get
  });

  server.route({
    method: 'POST',
    path: initPath,
    handler: ctrl.insert
  });

  server.route({
    method: 'PUT',
    path: initPath + '/{id}',
    handler: ctrl.update
  });

  server.route({
    method: 'DELETE',
    path: initPath + '/{id}',
    handler: ctrl.remove
  });

};
