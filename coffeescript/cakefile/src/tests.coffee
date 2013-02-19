class A
  constructor: (@className) ->
    @className ||= 'A Class'  

  setClassName: (@className) ->

  getClassName: ->
    @className

  # atributo publico
  att1: 'teste 2'


# ---

a = new A()

#a.setClassName 'new A class name'

console.log a.getClassName()
console.log a.att1
