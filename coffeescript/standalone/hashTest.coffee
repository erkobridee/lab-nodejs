crypto = require 'crypto'

hashString = (value) ->
  hash = crypto.createHash 'sha1'
  hash.update value
  hash.digest 'hex'

console.log hashString new Date().toString()