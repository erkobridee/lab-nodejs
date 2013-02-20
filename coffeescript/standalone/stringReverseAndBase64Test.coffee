# -------------------------------------------

reverseStr = (value) ->
  splitext = value.split ""
  revertext = splitext.reverse()
  reversed = revertext.join ""
  reversed

String::reverse = () ->
  splitext = @split ""
  revertext = splitext.reverse()
  reversed = revertext.join ""
  reversed

# -------------------------------------------

x = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec est ac lectus gravida egestas vitae id lorem.'

console.log '\n'
console.log "x : #{x}"
console.log "x.reverse() : #{x.reverse()}"
console.log '\n'

x = reverseStr x

console.log x

x = reverseStr x

console.log x

console.log '\n'

# -------------------------------------------

Base64 = require './lib/base64'

###
console.log Base64
console.log '\n'
###

console.time('encode')
x = reverseStr x
console.log "0: #{x}"
x = Base64.encode x
console.log "1: #{x}"
x = reverseStr x
console.log "2: #{x}"
x = Base64.encode x
console.log "3: #{x}"
console.timeEnd('encode')

console.log '\n'

console.time('decode')
x = Base64.decode x
console.log "3: #{x}"
x = reverseStr x
console.log "2: #{x}"
x = Base64.decode x
console.log "1: #{x}"
x = reverseStr x
console.log "0: #{x}"
console.timeEnd('decode')

console.log '\n'

console.log x

console.log '\n'

# -------------------------------------------
