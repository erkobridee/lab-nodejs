// 01_test_interface_usage.js
// http://www.javascriptbank.com/how-implement-interfaces-in-javascript.html

var TestInterfaceUsage = (function() {

  var Interface = require('./Interface');

  // We pass into the Interface the name of the current Interface instance, 

  // followed by an Array of the methods we are expecting to find
  var test = new Interface('test', ['details', 'age']);

   
  var properties = { 
    name: "Mark McDonnell", 
    actions: { 
      details: function() {

        return "I am " + this.age() + " years old.";

      },
      age: (function(birthdate) {
        var dob = new Date(birthdate),

          today = new Date(),
          ms = today.valueOf() - dob.valueOf(),

          minutes = ms / 1000 / 60,
          hours = minutes / 60,

          days = hours / 24,
          years = days / 365,

          age = Math.floor(years)         
        return function() {

          return age;
        };
      })("1981 08 30")
    }
  };
   
  // Create a Person constructor that will implement the above properties/methods
  function Person(config) {

    // Pass in the methods we are expecting, 
    // followed by the name of the Interface instance that we're checking against
    Interface.ensureImplements(config.actions, test);

    this.name = config.name;
    this.methods = config.actions;

  }
   
  // Create a new instance of the Person constructor...
  var me = new Person(properties);

   
  // ...and make sure the methods are working
  console.log(me.methods.age());
  console.log(me.methods.details());  

})();