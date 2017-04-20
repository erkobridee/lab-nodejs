var Joi = require('joi');

module.exports = (function() {

  return {
    _id: Joi.number(),
    name: Joi.string().required(),
    description: Joi.string(),
    url: Joi.string().required()
  };

})();
