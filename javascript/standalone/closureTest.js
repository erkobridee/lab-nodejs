(function () {

  var alert = function(msg) {
    console.log(msg);
  }

  var A = (function() {
    
    function A() {}

    A.prototype.att1 = 'attribute 1';

    A.prototype.say = function(message) {
      msg = message || 'class A say something';
      alert(msg);
    }

    A.prototype.say2 = function(message) {
      msg = message || 'class A say2 something';
      alert(msg);
    }

    return A;

  })();

  
  var aInstance = new A();
  
  alert(aInstance.att1);
  aInstance.att1 = 'new value attribute 1';
  alert(aInstance.att1);

  aInstance.say();
  aInstance.say2();

}).call(this);