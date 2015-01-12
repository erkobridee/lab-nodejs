// load shared streams
require('./helpers/sharedStreams');

var loadTasks = require('./helpers/loadTasks');

// load tasks config per file
loadTasks('gulp/tasks');

