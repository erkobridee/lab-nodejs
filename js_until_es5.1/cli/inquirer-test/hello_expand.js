var inquirer = require('inquirer');

var questions = [
  {
    type: 'expand',
    name: 'you',
    message: 'hello...',
    choices: [
      {
        key: 't',
        name: 'There',
        value: 'there'
      },
      {
        key: 'w',
        name: 'World',
        value: 'world'
      },
      new inquirer.Separator(),
      {
        key: 'p',
        name: 'Planet',
        value: 'planet'
      }
    ]
  }
];

inquirer.prompt(questions, function(answers) {
  console.log('hello ' + JSON.stringify(answers.you));
});
