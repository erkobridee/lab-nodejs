var inquirer = require('inquirer');

var questions = [
  {
    type: 'list',
    name: 'you',
    message: 'hello...',
    choices: [
      'there',
      'world',
      new inquirer.Separator(),
      'planet'
    ]
  }
];

inquirer.prompt(questions, function(answers) {
  console.log('hello ' + answers.you);
});
