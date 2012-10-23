var personModel = require('../model/PersonModel');

exports.index = function(req, res) {
  res.render('index', { title: 'Express' })
};

exports.about = function(req, res) {
  res.render(
    'about', 
	{ 
	  title: 'About',
      content: 'Hello!' 
    }
  )
};

exports.persons = function(req, res) {
  res.render(
    'persons', 
	  { 
	    title: 'Persons',
      persons: personModel.list(5) 
    }
  )
};

exports.pageError = function(req, res) {
  throw new Error('page process error');
};

exports.accessNotAllowed = function(req, res) {
  var err = new Error('Access Not Allowed!');
  err.status = 403;
  throw err;
};
