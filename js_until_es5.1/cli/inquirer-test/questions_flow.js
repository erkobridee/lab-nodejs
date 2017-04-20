var inquirer = require('inquirer'),
    selection = {
      watch: '',
      name: ''
    },
    questions;

function ask(questions, cb) {
  inquirer.prompt(questions, cb);
}

//---

function start() {
  questions = [
    {
      type: 'confirm',
      name: 'watchSomething',
      message: 'Do you want watch something?'
    }
  ];

  //
  ask(questions, function(answer) {
    if(answer.watchSomething) select();
  });
}

function select() {
  questions = [
    {
      type: 'list',
      name: 'selected',
      message: 'What do you want to watch?',
      choices: [
        {
          name: 'Movies',
          value: 1
        },
        {
          name: 'TV Series',
          value: 2
        }
      ]
    }
  ];

  ask(questions, function(answer) {

    if( answer.selected === 1 ) {
      selection.watch = 'Movie';
      movies();
    } else if( answer.selected === 2 ) {
      selection.watch = 'TV Serie';
      tvseries();
    }

  });
}

function movies() {
  questions = [
    {
      type: 'list',
      name: 'selected',
      message: 'Movie',
      paginated : true,
      choices: [
        new inquirer.Separator('--- Action:'),
        '300: Rise of an Empire',
        'Non-Stop',
        'Robocop',
        'World War Z',
        new inquirer.Separator('--- Adventure:'),
        'Frozen',
        'The LEGO Movie',
        'The Legend of Hercules',
        'After Earth'
      ]
    }
  ];

  ask(questions, function( answer ) {
    selection.name = answer.selected;
    end();
  });

}

function tvseries() {
  questions = [
    {
      type: 'list',
      name: 'selected',
      message: 'TV Serie',
      paginated : true,
      choices: [
        new inquirer.Separator('--- Comedy:'),
        'The Big Bang Theory',
        'How I Met Your Mother',
        'The Simpsons',
        'Family Guy',
        new inquirer.Separator('--- Adventure:'),
        'Game of Thrones',
        'Sherlock',
        'Lost',
        'Arrow'
      ]
    }
  ];

  ask(questions, function( answer ) {
    selection.name = answer.selected;
    end();
  });
}

function end() {
  console.log('end >> ' + JSON.stringify(selection, null, 2) );
}

//---

start();
