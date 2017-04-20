var shell = require('shelljs');

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
} else {
  shell.echo('uhulll we have git here!');
}