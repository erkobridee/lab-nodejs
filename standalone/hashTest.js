var crypto = require('crypto');

function hashString(value) {
  hash = crypto.createHash('sha1');
  hash.update(value);
  return hash.digest('hex');
}

console.log(hashString(new Date().toString()));