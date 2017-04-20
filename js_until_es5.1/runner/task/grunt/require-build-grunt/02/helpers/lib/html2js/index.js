var lib = {
  findLocations   : require('./findLocations'),
  checkLocations  : require('./checkLocations'),
  makeCache       : require('./makeCache')
};

module.exports = function( options ) {

  return lib
    .findLocations( options )
    .then(function( locationsArray ) {

      return lib.checkLocations( locationsArray );

    })
    .then(function( locationsArrayReviewed ) {

      options.locations = locationsArrayReviewed;

      return lib.makeCache( options );

    });

};
