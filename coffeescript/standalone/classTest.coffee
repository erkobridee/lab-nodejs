
# ------------------------------------------

alert = (message) -> console.log message

# ------------------------------------------

class A
  att1: 'attribute 1'
  say: (message = 'class A say something') -> alert message
  say2: (message = 'class A say2 something') -> alert message

# ------------------------------------------

aInstance = new A

alert aInstance.att1
aInstance.att1 = 'new value attribute 1'
alert aInstance.att1

aInstance.say()
aInstance.say2()
