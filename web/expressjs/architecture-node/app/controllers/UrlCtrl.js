var UrlCtrl;

UrlCtrl = (function() {
  var personModel;

  function UrlCtrl() {}

  personModel = require('../models/PersonModel');

  UrlCtrl.index = function(req, res) {
    return res.render("index", {
      title: "Express"
    });
  };

  UrlCtrl.about = function(req, res) {
    return res.render("about", {
      title: "About",
      content: "Hello!"
    });
  };

  UrlCtrl.persons = function(req, res) {
    return res.render("persons", {
      title: "Persons",
      persons: personModel.list(5)
    });
  };

  UrlCtrl.pageError = function(req, res) {
    throw new Error('page process error');
  };

  UrlCtrl.accessNotAllowed = function(req, res) {
    var err;
    err = new Error('Access Not Allowed!');
    err.status = 403;
    throw err;
  };

  return UrlCtrl;

})();

module.exports = {
  index: UrlCtrl.index,
  about: UrlCtrl.about,
  persons: UrlCtrl.persons,
  pageError: UrlCtrl.pageError,
  accessNotAllowed: UrlCtrl.accessNotAllowed
};
