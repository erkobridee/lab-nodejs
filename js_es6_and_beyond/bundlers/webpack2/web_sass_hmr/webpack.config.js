// see webpack configs inside of config/ directory
module.exports = env => {
  let config = {};
  try {
    config = require(`./config/webpack.${env}`);
  } catch(e) {
    // file not found
  }
  return config;
};
