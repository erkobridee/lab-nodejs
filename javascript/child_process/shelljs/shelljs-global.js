require('shelljs/global');

if (!which('git')) {
  echo('Sorry, this script requires git');
  exit(1);
} else {
  echo('uhulll we have git here!');
}