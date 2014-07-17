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

function askTemplate(key) {
  return ask(questions.templates[key]).then(function(answer) {
    if(answer.selected.type === 'question') return askTemplate(answer.selected.key);
    return answer;
  });
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

function askNotEmptyAnswer(forValue) {
  return ask(inputQuestion(
    'input',
    'Define ' + forValue + ':',
    null,
    function( value ) {
      var valid =  !_.isEmpty(value) && !_.isNumber(value);
      return valid || 'Please enter a ' + forValue;
    }));
}

function askName() {
  return askNotEmptyAnswer('name');
}

  //---

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

  return askName()
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

function askGruntConfigValues() {
  return askName()
    .then(function(answer) {
      return { 'name': answer.input };
    });
}

function askHelloWorldValues() {
  return askNotEmptyAnswer('greeting')
    .then(function(answer) {
      return { 'greeting': answer.input };
    });
}

function askTplsDirValues() {
  var output = {
    'name': null,
    'users': null
  };

  function askUserName() {
    return askNotEmptyAnswer('user name')
      .then(function(answer) {
        if( !output.users ) output.users = [];
        output.users.push( answer.input );
        return askToAddUser();
      });
  }

  function askToAddUser() {
    return askYesNo('Add user?')
      .then(function(answer) {
        if(answer.value) return askUserName();
      });
  }

  return askName()
    .then(function(answer) {
      output.name = answer.input;
      return askToAddUser();
    })
    .then(function() {
      return output;
    });

}

/*
TODO:
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
  return ask([
    inputQuestion('name', 'Define name:'),
    inputQuestion('route', 'Define route:'),
    inputQuestion('endpoint', 'Define resource URL:'),
  ])
  .then(function(answers) {
    console.log( JSON.stringify(answers, null, 2) );
  });
})
*/
.then(function() {
  console.log( 'Angular.js Values' );
  return askAngularjsValues('apirest');
})
.then(function(answers) {
  console.log( JSON.stringify(answers, null, 2) );
})


.then(function() {
  console.log( 'Grunt.js Config Values' );
  return askGruntConfigValues();
})
.then(function(answers) {
  console.log( JSON.stringify(answers, null, 2) );
})


.then(function() {
  console.log( 'Hello World Values' );
  return askHelloWorldValues();
})
.then(function(answers) {
  console.log( JSON.stringify(answers, null, 2) );
})


.then(function() {
  console.log( 'TplsDir Values' );
  return askTplsDirValues();
})
.then(function(answers) {
  console.log( JSON.stringify(answers, null, 2) );
})
;


