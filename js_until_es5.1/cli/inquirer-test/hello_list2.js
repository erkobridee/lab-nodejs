var inquirer = require('inquirer');

var questions = [
  {
    type: 'list',
    name: 'you',
    message: 'hello...',
    choices: [
      {
        name: 'there',
        value: 'choice value 1'
      },
      {
        name: 'world',
        value: 'choise value 2'
      },
      new inquirer.Separator(),
      {
        name: 'planet',
        value: 'choise value 3'
      }
    ]
  }
];

inquirer.prompt(questions, function(answers) {
  console.log('hello >> ' + answers.you);
});
