var path      = require('path'),
    _         = require('lodash-node'),
    Q         = require('q'),
    fs        = require('q-io/fs'),
    moment    = require('moment'),
    inquirer  = require('inquirer');

//---

var outputAnswers = {
  source: '', // template
  destination: '', // output
  restContext: null,
  debug: false,
  values: null,
  updateFileName: null
};

//---

var templates = {
  'plain_text': {
    type: 'file',
    source: 'plain_text.txt',
  },
  'hello_world': {
    type: 'file',
    source: 'hello_world.jst',
    destination: {
      filename: 'hello_world.txt'
    }
  },
  'tplsDir': {
    type: 'directory',
    source: '/tplsDir'
  },


  'gruntjs_config': {
    type: 'file',
    source: '/gruntjs/config.js',
    destination: {
      dirname: 'helpers/grunt/config'
    }
  },
  'angularjs_page': {
    type: 'directory',
    source: '/angularjs/page',
    destination: 'app'
  },
  'angularjs_crud': {
    type: 'directory',
    source: '/angularjs/crud',
    destination: 'app'
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
          name: 'Plain Text File',
          value: { type: 'template', key: 'plain_text' }
        },
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

//---

function hasWhiteSpace(s) {
  return /\s/g.test(s);
}

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

var askFor = {

  template: function(key) {
    return ask(questions.templates[key])
      .then(function(answer) {
        if(answer.selected.type === 'question') {
          return askFor.template(answer.selected.key);
        }
        return answer;
      });
  },

  yes_no: function(msg, defaultAnswer) {
    if( _.isUndefined( defaultAnswer ) ) defaultAnswer = true;
    return ask({
      type: 'confirm',
      name: 'value',
      message: msg,
      default: defaultAnswer
    });
  },

  not_empty_answer: function(forValue, checkWhitespaces) {
    if( _.isUndefined( checkWhitespaces ) ) checkWhitespaces = true;
    return ask(inputQuestion(
      'input',
      'Define ' + forValue + ':',
      null,
      function( value ) {
        var msg = 'Please enter a ' + forValue;
        var valid =  !_.isEmpty(value) && !_.isNumber(value);
        if(valid && checkWhitespaces) {
          valid = (hasWhiteSpace(value) ? msg + ' without whitespaces' : true);
        }
        return valid || msg;
      }));
  },

  name: function() {
    return askFor.not_empty_answer('name');
  },


  values: {

    gruntjs_config: function() {
      return askFor.name()
        .then(function(answer) {
          return { 'name': answer.input };
        });
    },


    angularjs_page: function() {
      var output = {};

      return askFor.name()
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
    },

    angularjs_crud: function() {
      return askFor.values['angularjs_page']()
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
    },



    plain_text: function() {
      return askFor.not_empty_answer('content', false)
        .then(function(answer) {
          return { 'content': answer.input };
        });
    },

    hello_world: function() {
      return askFor.not_empty_answer('greeting', false)
        .then(function(answer) {
          return { 'greeting': answer.input };
        });
    },

    tplsDir: function() {
      var output = {
        'name': null,
        'users': null
      };

      function askUserName() {
        return askFor.not_empty_answer('user name', false)
          .then(function(answer) {
            if( !output.users ) output.users = [];
            output.users.push( answer.input );
            return askToAddUser();
          });
      }

      function askToAddUser() {
        return askFor.yes_no('Add user?')
          .then(function(answer) {
            if(answer.value) return askUserName();
          });
      }

      return askFor.name()
        .then(function(answer) {
          output.name = answer.input;
          return askToAddUser();
        })
        .then(function() {
          return output;
        });

    }

  },


  'output': null

};

  //---

function checkIfExists( checkPath ) {
  return fs.exists( checkPath );
}

function renameOld( pathToRename ) {
  return fs.stat( pathToRename )
    .then(function( stat ) {

      var target = '';
      var now = moment().format('YYYYMMDDHHmmss');

      if( stat.isDirectory() ) {

        target = pathToRename + '_' + now;

      } else if( stat.isFile() ) {

        var dirname = path.dirname( pathToRename ),
            extname = path.extname( pathToRename )
            filename = path.basename( pathToRename, extname );

        target = path.join( dirname, ( filename + '_' + now + extname ) );

      } else {

        throw new Error( 'Invalid : \n  ' + pathToRename );

      }

      return fs.rename( pathToRename, target )
        .then(function() {
          return 'renamed from: [' + pathToRename + '] to [' + target + ']';
        });

    });
}

  //---

/*
TODO:
- define output destination question
  - ask to change output destination
    - input new output destination
  - check if directory/file exists
    - ask to overwrite
*/

function askOutputFile() {

  //-----------------------------------
  // @begin: define output attributes
  var outputDestination = outputAnswers.destination.dirname;
  var selectedTemplate = outputAnswers.template;

  var output = {
    dirname: outputDestination,
    file: null
  };

  if(selectedTemplate.destination) {
    if(selectedTemplate.destination.dirname) output.dirname = selectedTemplate.destination.dirname;
    if(selectedTemplate.destination.filename) {
      var extname = path.extname( selectedTemplate.destination.filename );
      output.file = {
        name: path.basename( selectedTemplate.destination.filename, extname ),
        ext: extname
      };
    }
  }

  if( !output.file ) {
    if( outputAnswers.values.name ) {
      output.file = {
        name: outputAnswers.values.name,
        ext: path.extname( selectedTemplate.source )
      };
    } else {
      var extname = path.extname(  selectedTemplate.source  );
      var basename = path.basename( selectedTemplate.source );
      output.file = {
        name: path.basename( basename, extname ),
        ext: extname
      };
    }
  }
  //@end: define output attributes
  //-----------------------------------

  function getOutputPath() {
    return path.join(output.dirname, output.file.name + output.file.ext);
  }

  //-----------------------------------

  function askForChangeOutput( defaultAnswer ) {
    if( _.isUndefined( defaultAnswer ) ) defaultAnswer = false;

    var outputPath = getOutputPath();

    var questionMsg = 'Change output:';
    questionMsg += '\n    directory : ' + output.dirname;
    questionMsg += '\n    file';
    questionMsg += '\n      name    : ' + output.file.name;
    questionMsg += '\n      ext     : ' + output.file.ext;
    questionMsg += '\n    path      : ' + outputPath;
    questionMsg += '\n';

    return askFor.yes_no(questionMsg, defaultAnswer)
      .then(function( answer ) {

        console.log( 'respondido...' );

        if( answer.value ) {

          /* TODO:

    2 - ask if user want to change output
      yes:
       ask to change? all path / output dir / output filename [use question list]

          */

        } else {

          /* TODO:

    3 - check if exists
      yes:
        overwrite?
        not overwrite
          ask to change? all path / output dir / output filename
          */

          console.log( outputPath );

          return checkIfExists( outputPath )
            .then(function (flag) {

              console.log( 'file exists: ' + flag );

              if( flag ){
                // yes: ask to overwrite

                  // yes: rename old

                  // no: ask to change output

                return askFor.yes_no('File already exists, overwrite?', false)
                  .then(function( answer ) {

                      if( answer.value ) { // overwrite file
                        return renameOld( outputPath );
                      } else { // ask to change output
                        return askForChangeOutput( true ); // set default answer to true
                      }

                  });
              }

              return 'finished';

            });

        }

        console.log( 'change? ' + answer.value );
        return answer.value;
      });

  }


  //-----------------------------------
  return askForChangeOutput()
    .then(function() {
      // TODO: review ouput
      return output;
    });

}



function askOutputDirectory() {
  return 'is directory';
}


function askOutput() {

  if(outputAnswers.template.type === 'file') {
    return askOutputFile();
  } else if(outputAnswers.template.type === 'directory') {
    return askOutputDirectory();
  }

}

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
  outputAnswers.destination = { dirname: options.destination };

  outputAnswers.restContext = options.restContext || 'rest';

  // @end: check options
  //------------------------

  var deferred = Q.defer();
  deferred.resolve('ok');
  return deferred.promise;
}

start({
  source: '/templates',
  destination: '../../dist',
  restContext: 'apirest'
})
.then(function(msg) {
  console.log( 'selecte template' );
  return askFor.template('available')
})
.then(function(answer) {
  console.log( 'ask values for: ' + answer.selected.key );

//-------------------------------------------
  // @begin: define : source
  var template = templates[answer.selected.key];

  outputAnswers.template = template;

  outputAnswers.source = path.join( outputAnswers.source, template.source );
  // @end: define : source
  //-------------------------------------------

  return askFor.values[answer.selected.key]();
})
.then(function(answers) {
  outputAnswers.values = answers;
  console.log( JSON.stringify(answers, null, 2) );
})
.then(function() {
  console.log( 'TODO: ask for output infos' );

  return askOutput();
})
.then(function (answers) {

  console.log(answers);

})
.then(function() {
  // TODO: ask to debug generate engine

  console.log( 'output object to engine' );
  //return outputAnswers;
  console.log( JSON.stringify(outputAnswers, null, 2) );
})
;


