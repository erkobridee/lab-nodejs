define(['src/app/utils/Hello'], function(Hello) {

describe('Hello Tests', function() {

  /*
  var Hello;

  beforeEach(function() {
    Hello = require('app/utils/Hello');
  });
  */

  describe('Hello Function', function() {

    it('should be defined', function() {
      expect( Hello ).toBeDefined();
    });

  });

  describe('Hello Instance', function() {

    beforeEach(function() {
      this.hello = new Hello();
    });

    it('should be define', function() {
      expect( this.hello ).toBeDefined();
    });

    it('should say Hello World', function() {
      expect( this.hello.say() ).toEqual( 'Hello World' );
    });

    it('should say Hello Erko Bridee', function() {
      expect( this.hello.say( 'Erko Bridee' ) ).toEqual( 'Hello Erko Bridee' );
    });

  });


});

});
