describe('Hello Tests', function() {

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

    it('should say Hello Bob', function() {
      expect( this.hello.say( 'Bob' ) ).toEqual( 'Hello Bob' );
    });

  });


});
