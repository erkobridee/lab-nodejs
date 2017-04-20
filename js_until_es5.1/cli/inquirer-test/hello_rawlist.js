var inquirer = require('inquirer');

var questions = [
  {
    type: 'rawlist',
    name: 'you',
    message: 'hello...',
    choices: [
      'there',
      'world',
      'planet'
    ]
  }
];

inquirer.prompt(questions, function(answers) {
  console.log('hello ' + answers.you);
});
