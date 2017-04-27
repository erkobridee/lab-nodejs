// see webpack configs inside of config/ directory
module.exports = function(env){
  var config = {};
  try {
    config = require('./config/webpack.' + env );
  } catch(e) {
    // file not found
  }
  return config;
};
