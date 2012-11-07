// OS docs
// http://nodejs.org/api/os.html

var os = require('os');

console.log('\n');
console.log('-------------------------------------------------------');
console.log('os.cpus');
console.log(os.cpus());
console.log('-------------------------------------------------------');
console.log('\n');
console.log('-------------------------------------------------------');
console.log('os.networkInterfaces');
console.log(os.networkInterfaces());
console.log('-------------------------------------------------------');
console.log('\n');

console.log('os.hostname'); 
console.log('\t' + os.hostname());

console.log('os.loadavg'); 
console.log('\t' + os.loadavg());

console.log('os.uptime'); 
console.log('\t' + os.uptime());

console.log('os.freemem');
console.log('\t' + os.freemem());

console.log('os.totalmem');
console.log('\t' + os.totalmem());

console.log('os.type');
console.log('\t' + os.type());

console.log('os.release');
console.log('\t' + os.release());

console.log('os.arch');
console.log('\t' + os.arch());

console.log('os.platform');
console.log('\t' + os.platform());

console.log('os.tmpDir');
console.log('\t' + os.tmpDir());

console.log('os.EOL');
console.log('\t' + JSON.stringify(os.EOL));

console.log('-------------------------------------------------------');
console.log('\n');
