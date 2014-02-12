
// define code scope
(function () {

  //------------------------------------------

  var log = function(msg) {
    console.log(msg);
  }

  //------------------------------------------

  // Class Scope
  var A = (function() {

    // Constructor
    function ClassDef() {};

    // static ------------------------------------------

      // vars
    ClassDef.staticAtt = 'static attribute value';

      // functions
    ClassDef.staticHelloMessage = function() {
      return 'static hello message';
    };


    // private ------------------------------------------

      // vars
    var privateSharedAtt = 'private shared attribute value';

      // function
    // var privateHelloMessage = function() {  // both ways to declare one function
    function privateSharedHelloMessage() {
      return 'private shared hello message';
    };


    // public ------------------------------------------

      // vars
    ClassDef.prototype.publicAtt = 'public attribute value';

      // functions
    ClassDef.prototype.publicHelloMessage = function() {
      return 'public hello message';
    };

        //---

    ClassDef.prototype.setPrivateSharedAtt = function(value) {
      privateSharedAtt = value;
    };

    ClassDef.prototype.getPrivateSharedAtt = function() {
      return privateSharedAtt;
    };

    ClassDef.prototype.getPrivateSharedHelloMessage = function() {
      return privateSharedHelloMessage();
    };

        //---

    ClassDef.prototype.say = function(message) {
      // if message not defined, set default value
      msg = message || 'class A say something';
      log(msg); // call parent function
    };

    ClassDef.prototype.say2 = function(message) {
      // if message not defined, set default value
      msg = message || 'class A say2 something';
      log(msg); // call parent function
    };

    //---

    // return class definition
    return ClassDef;

  })();

  //------------------------------------------

  log(A); // class defined

  log('------');

  // statics
  log(A.staticAtt);
  log(A.staticHelloMessage());
  
  log('------');  

  var aInstance = new A();
  
  log(aInstance.publicAtt);
  aInstance.publicAtt = 'new value to public attribute';
  log(aInstance.publicAtt);

  log('------'); 

  aInstance.say();
  aInstance.say2();

  log('------'); 

  log(aInstance.getPrivateSharedHelloMessage());
  log(aInstance.getPrivateSharedAtt());
  aInstance.setPrivateSharedAtt('new private shared attribute value');
  log(aInstance.getPrivateSharedAtt());

})(); // eval and execute this defined code scope


console.log(A); // ReferenceError: A is not defined
