module.exports = function( locations ) {

  locations = locations.sort();

  var outputLocations = [];

  function checkLocations() {
    var check = null;
    while( locations.length > 0 ) {
      check = locations.shift();
      if(!hasSubDir(check)) outputLocations.push( check );
    }
    check = null;
  }

  function hasSubDir(location) {
    for(var len = locations.length; len > 0; len--) {
      if( locations[ len-1 ].indexOf( location ) != -1) return true;
    }
    return false;
  }

  //---

  checkLocations();

  return outputLocations;

};
