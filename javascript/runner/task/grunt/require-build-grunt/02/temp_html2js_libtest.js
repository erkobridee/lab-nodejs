/*
var findLocations = require('./helpers/lib/html2js/findLocations');
var checkLocations = require('./helpers/lib/html2js/checkLocations');
var makeCache = require('./helpers/lib/html2js/makeCache')

var source = './src/app';
var destination = './templatesCached';
var fileMatch = /package\.js$/;
// var ignorePath = 'lazy/load';
var ignorePath = '!';
var removeBase = 'src/app/';

findLocations({
  source: source,
  fileMatch: fileMatch,
  ignorePath: ignorePath,
  removeBase: removeBase
})
.then(function( locationsArray ) {

  return checkLocations( locationsArray );

})
.then(function( locationsArrayReviewed ) {

  return makeCache({
    source: source,
    destination: destination,
    locations: locationsArrayReviewed
  });

})
.then(function( results ) {
  console.log( '...ended \n' );
  console.log( results );
});
*/

//------------------------------------------------------------------------------

var html2js = require('./helpers/lib/html2js');

var options = {
  source        : './src/app',
  destination   : './templatesCached',
  fileMatch     : /package\.js$/,
  // ignorePath    : 'lazy/load',
  ignorePath    : '!',
  removeBase    : 'src/app/'
};

html2js( options )
  .then(function( results ) {
    console.log( '...ended \n' );
    console.log( results );
  });
