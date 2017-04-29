// see webpack configs inside of config/ directory
module.exports = function(env){
  var config = {};
  try {
    config = require('./config/webpack.' + env );
  } catch(e) {
    // file not found
    console.log('\nconfig file \'./config/webpack.' + env + '.js\' not founded\n\n');
  }
  return config;
};
