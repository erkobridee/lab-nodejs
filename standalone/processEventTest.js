// process event docs 
// http://nodejs.org/api/process.html#process_process_env

console.log('\n');
console.log('----------------------------------------------');
console.log(process.env);
console.log('----------------------------------------------');
console.log('\n');
if(!process.env.NODE_ENV) {
  console.log('test with cmd line');
  console.log('NODE_ENV=production node processEventTest.js');
} else {
  console.log('NODE_ENV = ' + process.env.NODE_ENV);
}
console.log('\n');
console.log('----------------------------------------------');
console.log('\n');