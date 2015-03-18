module.exports = (function() {

  var model = require('./model');

  var service = {
    get: get,
    insert: insert,
    update: update,
    remove: remove
  };

  function print( value ) { console.log( JSON.stringify( value, null, 2 ) ); };

  function toNumber(value) {
    if(typeof value === 'string')
      value = parseInt(value);
    return value;
  }

  function get( request, reply ) {

    var id = request.params.id;
    if( id ) {

      model.find(id, function(err, result) {
        if( result === 'Not Found' ) {
          return reply( result ).code( 404 );
        }
        reply( result );
      });

    } else {

      var page, size, opts;

      page = request.query.page || 1;
      size = request.query.size || 10;

      opts = {
        page: toNumber(page),
        size: toNumber(size)
      };

      model.list(opts, function(err, results) {
        reply( results );
      });

    }

  }

  function insert( request, reply ) {

    model.insert(request.payload, function(err, result) {
      reply( result );
    });

  }

  function update( request, reply ) {

    var id = request.params.id,
        vo = request.payload;

    model.update(id, vo, function(err, result) {
      reply( result );
    });

  }

  function remove( request, reply ) {

    var id = request.params.id;

    model.remove(id, function(err, result) {
      reply( result );
    });

  }

  //---
  return service;

})();
