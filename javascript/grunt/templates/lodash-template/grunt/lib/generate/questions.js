var path      = require('path'),
    _         = require('lodash-node'),
    Q         = require('q'),
    inquirer  = require('inquirer');

//---

function ask(questions, cb) {
  var promise = null;

  if( !cb ) {
    var deferred = Q.defer();
    cb = deferred.resolve;
    promise = deferred.promise;
  }

  inquirer.prompt(questions, cb);

  return promise;
}

//---

var templates = {
  'hello_world': {
    template: 'hello_world.jst'
  },
  'tplsDir': {
    template: '/tplsDir'
  },


  'gruntjs_config': {
    template: '/gruntjs/config.js',
    destination: 'helpers/grunt/config'
  },
  'angularjs_page': {
    template: '/angularjs/page'
  },
  'angularjs_crud': {
    template: '/angularjs/crud'
  }
};

//---

/*
  1 - which template
  2 - values for selected template
  3 - change default output
*/

var questions = {

  'templates': {

    'available': {
      type: 'list',
      name: 'selected',
      message: 'Select Template',
      choices: [
        {
          name: 'Hello World',
          value: { type: 'template', key: 'hello_world' }
        },
        {
          name: 'Templates Directory Sample',
          value: { type: 'template', key: 'tplsDir' }
        },
        new inquirer.Separator(),
        {
          name: 'Grunt.js Config Task File',
          value: { type: 'template', key: 'gruntjs_config'}
        },
        {
          name: 'Angular.js',
          value: { type: 'question', key: 'angularjs' }
        }
      ]
    },

    'angularjs': {
      type: 'list',
      name: 'selected',
      message: 'Select Angular.js Template',
      choices: [
        {
          name: 'Page',
          value: { type: 'template', key: 'angularjs_page' }
        },
        {
          name: 'Use Case (CRUD)',
          value: { type: 'template', key: 'angularjs_crud' }
        }
      ]
    }

  }

};

/*
_.forEach(templatesMap, function(val, key) {
  console.log('key: ' + key);
  console.log('value: ' + val);
  console.log('---\n');
});
*/

//---

function inputQuestion(name, message, defaultAnswer, fnValidate) {
  return {
    type: 'input',
    name: name,
    message: message,
    validate: fnValidate,
    default: defaultAnswer,
  };
}

//---

function askYesNo(msg, defaultAnswer) {
  defaultAnswer = defaultAnswer || true;
  return ask({
    type: 'confirm',
    name: 'value',
    message: msg,
    default: defaultAnswer
  });
}

function askTemplate(key) {
  return ask(questions.templates[key]).then(function(answer) {
    if(answer.selected.type === 'question') return askTemplate(answer.selected.key);
    return answer;
  });
}

function askAngularjsValues(options) {
  var restContext = 'rest',
      askResourceURL = false;

  // @begin: check param
  if( !options ) {

    options = {
      restContext: null,
      askResourceURL: null
    };

  } else if( _.isBoolean( options ) ) {

    askResourceURL = options;

  } else if( _.isString( options ) ) {

    restContext = options;
    askResourceURL = true;

  }
  // @end: check param

  var output = {};

  return ask(inputQuestion(
    'input',
    'Define name:',
    null,
    function( value ) {
      var valid =  !_.isEmpty(value) && !_.isNumber(value);
      return valid || "Please enter a name";
    }))
    .then(function(answer) {
      output.name = answer.input;

      return ask(inputQuestion('input', 'Define route:', output.name));
    })
    .then(function(answer) {
      output.route = answer.input;

      if(askResourceURL) {
        return ask(inputQuestion(
          'input',
          'Define resource url:',
          path.join(restContext, output.name)
        ))
        .then(function(answer) {
          output.endpoint = answer.input;
        });
      }
    })
    .then(function() {
      return output;
    });
}

/*
TODO:

- define grunt config values question
- define hello world values question
- define tplsDir values question

- define output destination question
*/

//---

var outputAnswers = {
  source: '', // template
  destination: '', // output
  values: {}
};

//---

console.log('generate questions');


// TODO: module.exports =

function start() {
  var deferred = Q.defer();
  deferred.resolve('ok');
  return deferred.promise;
}

start()
.then(function(msg) {
  return askTemplate('available');
})
.then(function(answer) {
  console.log( 'selected?' );
  console.log( answer.selected );
})
/*
.then(function() {
  return askYesNo('End here?').then(function(answer) {
    console.log(answer.value);
  });
})
*/
/*
.then(function() {
  return ask([
    inputQuestion('name', 'Define name:'),
    inputQuestion('route', 'Define route:'),
    inputQuestion('endpoint', 'Define resource URL:'),
  ])
  .then(function(answers) {
    console.log( JSON.stringify(answers, null, 2) );
  });
})
.then(function() {
  return ask(inputQuestion('name', 'Define name:', 'teste')).then(function(answer) {
    console.log(answer.name);
  });
})
*/
.then(function() {
  return askAngularjsValues('apirest')
    .then(function(answers) {
      console.log( JSON.stringify(answers, null, 2) );
    });
})
;


