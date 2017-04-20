/*
  based on:

  http://movio.co/blog/gulp-streaming-builds/

  https://teamgaslight.com/blog/small-sips-of-gulp-dot-js-4-steps-to-reduce-complexity
*/

/*
var gulp      = require('gulp');
var $         = require('./helpers/$');

require('./tasks/webserver')(gulp, $);
require('./tasks/clean')(gulp, $);
require('./tasks/jshint')(gulp, $);
require('./tasks/build')(gulp, $);
require('./tasks/default')(gulp, $);
*/

/*
var fs        = require('fs');
var tasks     = fs.readdirSync('./gulp/tasks/');

tasks.forEach(function(task) {
  require('./tasks/' + task)(gulp, $);
});
*/


// var loadTasks = require('./helpers/loadTasks');

// load tasks config per file
// loadTasks('tools/gulp/tasks');


module.exports.loadTasks = require('./helpers/loadTasks');
