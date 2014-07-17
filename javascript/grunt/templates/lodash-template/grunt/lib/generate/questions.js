var path      = require('path'),
    _         = require('lodash-node'),
    Q         = require('q'),
    inquirer  = require('inquirer');

//---

var outputAnswers = {
  source: '', // template
  destination: '', // output
  restContext: null,
  debug: false,
  values: null
};

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

var askFor = {

  'template': null,

  'yes_no': null,
  'not_empty_answer': null,
  'name': null,

  'values': {
    'gruntjs_config': null,

    'angularjs_page': null,
    'angularjs_crud': null,

    'hello_world': null,
    'tplsDir': null
  },

  'output': null

};

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
      // TODO: verify white spaces
      var valid =  !_.isEmpty(value) && !_.isNumber(value);
      return valid || 'Please enter a ' + forValue;
    }));
}

function askName() {
  return askNotEmptyAnswer('name');
}

  //---

function askAngularjsPageValues() {
  var output = {};

  return askName()
    .then(function(answer) {
      output.name = answer.input;

      return ask(inputQuestion('input', 'Define route:', output.name));
    })
    .then(function(answer) {
      output.route = answer.input;
    })
    .then(function() {
      return output;
    });
}

function askAngularjsCrudValues() {
  return askAngularjsPageValues()
    .then(function(output) {

      return ask(inputQuestion(
        'input',
        'Define resource url:',
        path.join(outputAnswers.restContext, output.name)
      ))
      .then(function(answer) {
        output.endpoint = answer.input;
      })
      .then(function() {
        return output;
      });

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

console.log('generate questions');


// TODO: module.exports =

function start(options) {

  //------------------------
  // @begin: check options

  /*
  var options = {
    source: '',
    destination: '',
    restContext: ''
  };
  */

  if( !options ) throw new Error('options not defined');

  if( !options.source )  throw new Error('options.source not defined');
  outputAnswers.source = options.source;

  if( !options.destination )  throw new Error('options.destination not defined');
  outputAnswers.destination = options.destination;

  outputAnswers.restContext = options.restContext || 'rest';

  // @end: check options
  //------------------------

  var deferred = Q.defer();
  deferred.resolve('ok');
  return deferred.promise;
}

start({
  source: '/templates',
  destination: '/dist',
  restContext: 'apirest'
})
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
  //return askAngularjsPageValues();
  return askAngularjsCrudValues();
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


