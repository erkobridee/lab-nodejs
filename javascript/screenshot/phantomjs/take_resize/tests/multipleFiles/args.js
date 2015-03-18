module.exports = (function() {

  var regexp = {
    isFlag: /^-|--/,
    hasEquals: /=/,
    isNumber: /^\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*$/,
    isBool: /^true|false$/,
    isTrue: /^true$/,
  };

  var system = require('system'),
      sysargs = system.args;

  var argv = {
    _: [],
    '$0': sysargs[0]
  };

  if( sysargs.length > 1 ) {
    processArgs( argv, sysargs.slice(1) );
  }

  //---

  function processArgs( argv, sysargs ) {
    if( sysargs.length === 0 ) return;

    var arg = sysargs.shift();
    if( !isFlag( arg ) ) {
      argv._.push( arg );
      processArgs( argv, sysargs );
    } else {
      arg = arg.replace(/-/g, '');
      if( flagHasOwnValue( arg ) ) {
        var parts = arg.split('=');
        appendValue( argv, parts[0], parts[1] );
        processArgs( argv, sysargs );
      } else {
        if( sysargs.length > 0 ) {
          var nextarg = sysargs.shift();
          if( isFlag( nextarg ) ) {
            appendValue( argv, arg, true );
            sysargs.unshift( nextarg );
            processArgs( argv, sysargs );
          } else {
            appendValue( argv, arg, nextarg );
            processArgs( argv, sysargs );
          }
        } else {
          appendValue( argv, arg, true );
        }

      }
    }

  }

  //---

  function appendValue( obj, key, value ) {
    if( obj[key] ) {
      if( Array.isArray( obj[key] ) ) {
        obj[key].push( checkValueType( value ) );
      } else {
        obj[key] = [ obj[key], checkValueType( value ) ];
      }
    } else {
      obj[key] = checkValueType( value );
    }
  }

  //---

  function isString(value) {return typeof value === 'string';}

  function isFlag( value ) {
    return regexp.isFlag.test( value );
  }

  function flagHasOwnValue( value ) {
    return regexp.hasEquals.test( value );
  }

  function checkValueType( value ) {
    if( !isString( value ) ) return value;

    if( regexp.isNumber.test( value ) ) {
      return Number( value );
    } else if( regexp.isBool.test( value ) ) {
      return regexp.isTrue.test( value );
    }
    return value;
  }

  //---
  return argv;

})();
