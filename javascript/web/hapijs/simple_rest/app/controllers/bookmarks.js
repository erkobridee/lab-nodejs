(function() {

  var service = {
    get: get,
    insert: insert,
    update: update,
    remove: remove
  };

  function get( request, reply ) {

    reply({ msg: 'get' });
  }

  function insert( request, reply ) {

    reply({ msg: 'insert' });
  }

  function update( request, reply ) {

    reply({ msg: 'update' });
  }

  function remove( request, reply ) {

    reply({ msg: 'remove' });
  }

  //---
  module.exports = service;
})();
