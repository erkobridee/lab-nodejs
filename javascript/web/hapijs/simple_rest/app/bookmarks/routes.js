module.exports = function( server ) {

  var ctrls = require('./controllers');
  var schema = require('./schema');

  var initPath = '/bookmarks';

  server.route({
    method: 'GET',
    path: initPath + '/{id?}',
    handler: ctrls.get
  });

  server.route({
    method: 'POST',
    path: initPath,
    handler: ctrls.insert,
    config: {
      validate: {
        payload: schema
      }
    }
  });

  server.route({
    method: 'PUT',
    path: initPath + '/{id}',
    handler: ctrls.update,
    config: {
      validate: {
        payload: schema
      }
    }
  });

  server.route({
    method: 'DELETE',
    path: initPath + '/{id}',
    handler: ctrls.remove
  });

};
