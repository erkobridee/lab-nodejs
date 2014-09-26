(function() {
  'use strict';

  var Person = (function() {

    //--- @begin: internal
    var instanceCount = 0;
    var objectsPrivate = {};

    function _private(object, key, value) {
      if(arguments.length === 0) throw Error('object parameter must be defined');
      if(object) {
        if(!objectsPrivate[object._oid]) objectsPrivate[object._oid] = {};
        var objectPrivate = objectsPrivate[object._oid];
        if(key) {
          if(value) objectPrivate[key] = value;
          return objectPrivate[key];
        }
        return objectPrivate;
      }
    }

    function _init(object) {
      object._oid = object.constructor.name + ':' + instanceCount++;
      _private(object);
    }
    //--- @end: internal

    function Person() {
      _init(this);
      this.name = '';
      this.age = 0;
    }
    var ClassDef = Person;

    ClassDef.prototype.setSalary = function(value) {
      _private(this)['salary'] = value;
    };

    ClassDef.prototype.getSalary = function() {
      return _private(this)['salary'];
    };

    // set and get
    ClassDef.prototype.salary = function(value) {
      if(value) _private(this)['salary'] = value;
      return _private(this)['salary'];
    }


    // return class definition
    return ClassDef;

  })();

  //----------------------------------------------------------------------------

  var person1 = new Person();
  person1.name = 'Person Name One';
  person1.age = 20;
  person1.setSalary(100);
  console.log(person1);
  console.log(person1.getSalary());
  person1.salary(150);
  console.log(person1.salary());


  var person2 = new Person();
  person2.name = 'Person Name Two';
  person2.age = 40;
  person2.setSalary(200);
  console.log(person2);
  console.log(person2.getSalary());
  person2.salary(250);
  console.log(person2.salary());


})();
