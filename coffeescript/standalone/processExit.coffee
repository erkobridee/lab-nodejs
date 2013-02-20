###
  processExit.js
  http://nodejs.org/api/process.html
###

process.on 'exit', () ->
  
  process.nextTick () ->
   console.log 'This will not run'

  console.log 'about to finish'
