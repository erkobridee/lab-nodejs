var inquirer = require('inquirer');

var questions = [
  {
    type: 'checkbox',
    name: 'you',
    message: 'hello...',
    choices: [
      'there',
      'world',
      'planet'
    ],
    validade: function( answer ) {
      if( answer.length < 1 ) {
        return 'You must choose at least one';
      }
      return true;
    }
  }
];

inquirer.prompt(questions, function(answers) {
  console.log('hello ' + answers.you );
});
