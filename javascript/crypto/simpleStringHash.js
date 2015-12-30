// simple string hash
function hashCode(value){
  var string;
  if (typeof value === 'object') {
    string = JSON.stringify(value);
  } else {
    string = value.toString();
  }

  var hash = 0;
  var length = string.length;
  for (var i = 0; i < length; i++) {
    hash = string.charCodeAt(i) + (hash << 6) + (hash << 16) - hash;
  }

  return hash.toString(36);
}

function logHashCode(value) {
  console.log(
    'algorithm: simple string hash | ' +
    'hash: ' + hashCode(value) + ' | ' +
    'src: ' + ((typeof value === 'object') ? JSON.stringify(value) : value)
  );
}

logHashCode('aloha');
logHashCode({att1: 'value 1', att2: 123});
