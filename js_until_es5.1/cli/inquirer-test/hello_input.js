var inquirer = require('inquirer');

var questions = [
  {
    type: 'input',
    name: 'you',
    message: 'hello...'
  }
];

inquirer.prompt(questions, function(answers) {
  console.log('hello ' + answers.you);
});
