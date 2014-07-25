define(
// require.js dependency injection
[
  'shared/mock/module'
],

// require.js module scope
function(module) {
  'use strict';


  module.factory(

    // factory name
    '<%= helpers.capitalize( name ) %>Collection',

    // factory dependencies injection
    ['DataStore', 'Helpers', '$log',

  // factory definition
  function(DataStore, helpers, console) {

    console.debug('<%= helpers.capitalize( name ) %>Collection');

    /*
      options = {
        name: '',
        objType: '',
        indicesArray: ['id'],
        fn: {
          searchValue: function(data, find) {},
          init: function( collection ) {}
        }
      }
    */
    var collection = DataStore.create({
      name: '<%= name %>',
      objType: '<%= helpers.capitalize( name ) %>',
      indicesArray: ['id', 'name'],
      fn: {
        searchValue: function(data, find) {

          if(!find) return [];

          var r = [], obj,
              regexp = new RegExp(find, 'i'),
              len = data.length;

          for (var i = 0; i < len; i++) {
            obj = data[i];

            if(obj.name.match(regexp) || obj.description.match(regexp))
              r.push(obj);
          }

          return r;

        },

        init: function( collection ) {

          console.log( 'init <%= helpers.capitalize( name ) %>Collection' );

          var seq = 0;

          function createObject(_id, _name, _description) {
            return {
              id: _id,
              name: _name,
              description: _description
            };
          }

          for (var i = 59; i >= 0; i--) {
            collection.insert(
              createObject(
                seq++,
                'fake name ' + (seq+1),
                'some fake descrition ' + (seq+1)
                )
            );
          }

        }
      }
    });


    function <%= helpers.capitalize( name ) %>Collection() {}
    var ClassDef = helpers.extendsFn( <%= helpers.capitalize( name ) %>Collection, collection );

    ClassDef.prototype.sayMyName = function() {
      return 'Angular.js : <%= helpers.capitalize( name ) %>Collection Mock';
    };

    var instance = new <%= helpers.capitalize( name ) %>Collection();

    console.log( instance );
    console.log( instance.list() );

    return instance;

  }]);


});
