var crypto = require('crypto');

function hashString(value, algorithm) {
  hash = crypto.createHash(algorithm);
  hash.update(value);
  return hash.digest('hex');
}

function logHash(value, algorithm) {
  algorithm = algorithm || 'sha1';
  console.log(
    'algorithm: ' + algorithm + ' | ' +
    'hash: ' + hashString(value, algorithm) + ' | ' +
    'src: ' + value
  );
}

logHash(new Date().toString());

var msg = 'aloha 123 ipsum lorem';

logHash(msg);
logHash(msg, 'md5');

msg = 'aloha 124 ipsum loren';

logHash(msg);
logHash(msg, 'md5');
