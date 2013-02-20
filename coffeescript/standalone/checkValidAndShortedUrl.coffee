###
  reference
  http://answers.oreilly.com/topic/280-how-to-validate-urls-with-regular-expressions/
###

checkValidURL = (url) ->
  pattern = /(http|https):\/\/([a-z0-9-]+((\.[a-z0-9-]+)+)?)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
  pattern.test url

checkUrlShorted = (url) ->
  pattern = /(http|https):\/\/([a-z0-9-]+((\.[a-z0-9-]+)+)?)(:[0-9]+)?(\/([a-zA-Z0-9]{1,4}))?(\/([a-zA-Z0-9]{5,32}))$/
  pattern.test url

checkUrl = (url) ->
  console.log "isURL : #{checkValidURL(url)} \t| 
    isShorted : #{checkUrlShorted(url)} \t| 
    > #{url}"

# -------------------------------------------------------

checkUrl '123'
checkUrl '123.com'

checkUrl '.com'
checkUrl 'http://.com'

checkUrl 'localhost'
checkUrl 'localhost:8080'

checkUrl 'http://123.ext'
checkUrl 'http://localhost'
checkUrl 'http://localhost:8080'

checkUrl 'google.com'
checkUrl 'http://www.google.com'
checkUrl 'https://www.google.com'

checkUrl 'http://sub.domain.ext'
checkUrl 'http://sub.domain.ext:8080'

checkUrl 'http://t.co'
checkUrl 'http://.co/VjpSr4'

checkUrl 'http://c9.io'

checkUrl 'http://www.adobe.com/devnet/'

checkUrl 'https://gist.github.com/3920081' # review pattern for url shorted 

checkUrl 'http:/t.co/VjpSr4'
checkUrl 'http://adobe.ly/VjpSr4'
checkUrl 'http://dlvr.it/Y5FpQ'
checkUrl 'http://bit.ly/lEkwhk'
checkUrl 'http://j.mp/lzxisx'
checkUrl 'http://goo.gl/quUx1'
checkUrl 'http://goo.gl/fb/Wv5G7'

### 
result

isURL : false | isShorted : false | > 123
isURL : false | isShorted : false | > 123.com
isURL : false | isShorted : false | > .com
isURL : false | isShorted : false | > http://.com
isURL : false | isShorted : false | > localhost
isURL : false | isShorted : false | > localhost:8080
isURL : true  | isShorted : false | > http://localhost
isURL : true  | isShorted : false | > http://localhost:8080
isURL : false | isShorted : false | > google.com
isURL : true  | isShorted : false | > http://www.google.com
isURL : true  | isShorted : false | > https://www.google.com
isURL : true  | isShorted : false | > http://sub.domain.ext
isURL : true  | isShorted : false | > http://sub.domain.ext:8080
isURL : true  | isShorted : false | > http://t.co
isURL : false | isShorted : false | > http://.co/VjpSr4
isURL : true  | isShorted : false | > http://c9.io
isURL : true  | isShorted : false | > http://www.adobe.com/devnet/
isURL : true  | isShorted : true  | > https://gist.github.com/3920081
isURL : false | isShorted : false | > http:/t.co/VjpSr4
isURL : true  | isShorted : true  | > http://adobe.ly/VjpSr4
isURL : true  | isShorted : true  | > http://dlvr.it/Y5FpQ
isURL : true  | isShorted : true  | > http://bit.ly/lEkwhk
isURL : true  | isShorted : true  | > http://j.mp/lzxisx
isURL : true  | isShorted : true  | > http://goo.gl/quUx1
isURL : true  | isShorted : true  | > http://goo.gl/fb/Wv5G7

###