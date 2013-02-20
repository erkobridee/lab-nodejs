###
  referente javascript regex
  http://james.padolsey.com/javascript/regular-expressions-in-javascript-part-2/

  Callback Functions in JavaScript
  http://www.impressivewebs.com/callback-functions-javascript/


  ** twitter text processor **

  white spaces 
  [ \t\r\n] = \s

  end with punctuation
  /(:|\.|,|!|\?)$/

  @ {user}
  /^@([a-z0-9-]+((\.|_[a-z0-9-]+)+)?)/i

  # {hashtag}
  /^#([a-z0-9-]+((\.|_[a-z0-9-]+)+)?)/i
  
  (http|https) {link}

  valid URL
  /(http|https):\/\/([a-z0-9-]+((\.[a-z0-9-]+)+)?)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/

  valid URL shorted
  /(http|https):\/\/([a-z0-9-]+((\.[a-z0-9-]+)+)?)(:[0-9]+)?(\/([a-zA-Z0-9]{1,4}))?(\/([a-zA-Z0-9]{5,32}))$/

###
# -----------------------------------------------------------------------------

class TwtTextProcessor
  resultObj = {}

  constructor: ->
    
  patterns = 
    end_with: /(:|\.|,|!|\?)$/
    user: /^@([a-z0-9-]+((\.|_[a-z0-9-]+)+)?)/i
    hashtag: /^#([a-z0-9-]+((\.|_[a-z0-9-]+)+)?)/i
    url: /(http|https):\/\/([a-z0-9-]+((\.[a-z0-9-]+)+)?)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/

  initResultObj = () ->
    resultObj = 
      text: null
      length: 0
      words: 0
      mentions: []
      hashtags: []
      links: []

  # private function
  processText = (text) ->
    resultObj.text = text
    resultObj.length = text.length
    text = text.replace(/\r\n/g, " ")
    arr = text.split(" ")
    resultObj.words = arr.length
    i = resultObj.words
    processWord arr[i]  while i--


  # private function
  processWord = (word) ->    
    # check end with punctuation
    word = word.replace(patterns.end_with, "")  if patterns.end_with.test(word)
    
    # user
    if patterns.user.test(word)
      word = word.replace(/^@/, "")
      resultObj.mentions.push word
    
    # hashtag
    else if patterns.hashtag.test(word)
      word = word.replace(/^#/, "")
      resultObj.hashtags.push word
    
    # url
    else resultObj.links.push word  if patterns.url.test(word)


  # public function
  process: (text, callback) ->
    initResultObj()
    processText text
    if callback and typeof (callback) is "function"
      callback resultObj
    else
      console.log resultObj    

# -----------------------------------------------------------------------------

#test

processor = new TwtTextProcessor

returned = (obj) ->
  console.log obj
  console.log ""

checkText = (text) ->
  processor.process text, returned

# -----------------------------------------------------------------------------

textArr = [
  'RT @devsexperts: Últimas vagas para o curso de #Java da @SuperaTI! Não perca esta oportunidade! http://j.mp/immGNC #soudev'
  '#soudev Google anuncia o Google+, seu projeto de rede social http://goo.gl/fb/CUjKZ'
  'RT @jaksestren Senti Firmeza!! RT @gusverner Como a gurizada de #ti aqui do Sul afia uma faca http://t.co/fNpkPs1 #FISL #soudev'
  '#soudev Um guia de recursos da plataforma Windows Azure http://goo.gl/fb/yDOKY'
  'RT @soudW: Conhecendo o #Hadoop - post do @ctaurion no #developerWorks http://ibm.co/lTvlrQ #SouDev'
  'RT @Pv_Fusion: Enviar e-mails com zend framework de forma simples http://t.co/vY1SFD3  #soudev #zend #zendframework #php'
]

i = textArr.length

checkText textArr[i]  while i--

###

result

{ text: 'RT @Pv_Fusion: Enviar e-mails com zend framework de forma simples http://t.co/vY1SFD3  #soudev #zend #zendframework #php',
  length: 120,
  words: 16,
  mentions: [ 'Pv_Fusion' ],
  hashtags: [ 'php', 'zendframework', 'zend', 'soudev' ],
  links: [ 'http://t.co/vY1SFD3' ] }

{ text: 'RT @soudW: Conhecendo o #Hadoop - post do @ctaurion no #developerWorks http://ibm.co/lTvlrQ #SouDev',
  length: 99,
  words: 13,
  mentions: [ 'ctaurion', 'soudW' ],
  hashtags: [ 'SouDev', 'developerWorks', 'Hadoop' ],
  links: [ 'http://ibm.co/lTvlrQ' ] }

{ text: '#soudev Um guia de recursos da plataforma Windows Azure http://goo.gl/fb/yDOKY',
  length: 78,
  words: 10,
  mentions: [],
  hashtags: [ 'soudev' ],
  links: [ 'http://goo.gl/fb/yDOKY' ] }

{ text: 'RT @jaksestren Senti Firmeza!! RT @gusverner Como a gurizada de #ti aqui do Sul afia uma faca http://t.co/fNpkPs1 #FISL #soudev',
  length: 127,
  words: 20,
  mentions: [ 'gusverner', 'jaksestren' ],
  hashtags: [ 'soudev', 'FISL', 'ti' ],
  links: [ 'http://t.co/fNpkPs1' ] }

{ text: '#soudev Google anuncia o Google+, seu projeto de rede social http://goo.gl/fb/CUjKZ',
  length: 83,
  words: 11,
  mentions: [],
  hashtags: [ 'soudev' ],
  links: [ 'http://goo.gl/fb/CUjKZ' ] }

{ text: 'RT @devsexperts: Últimas vagas para o curso de #Java da @SuperaTI! Não perca esta oportunidade! http://j.mp/immGNC #soudev',
  length: 122,
  words: 17,
  mentions: [ 'SuperaTI', 'devsexperts' ],
  hashtags: [ 'soudev', 'Java' ],
  links: [ 'http://j.mp/immGNC' ] }

###
