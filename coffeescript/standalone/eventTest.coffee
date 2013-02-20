###
   - Node.js Events Docs
  http://nodejs.org/api/events.html
###

events = require 'events'
EventEmitter = events.EventEmitter

class Test extends EventEmitter

  dispatch: (eventName, data) ->
    @emit(eventName, data)

# -----------------------------------------------------------------------

helloEventHandler = (data) ->
  console.log 'this is helloEventHandler'
  console.log data if data

customEventHandler = () ->
  console.log 'this is customEventHandler'

# -----------------------------------------------------------------------

test = new Test

# register events listeners
test.on('helloEvent', helloEventHandler)
test.on('customEvent', customEventHandler)

# dispatchers
test.dispatch('helloEvent')
test.dispatch('helloEvent', {hello: 'hello world'})
test.emit('helloEvent', {hello: 'hello world'})

test.dispatch 'customEvent'
test.emit 'customEvent'

# remove events listeners
test.removeListener('helloEvent', helloEventHandler)
test.removeListener('customEvent', customEventHandler)

# -----------------------------------------------------------------------

console.log 'Finished'