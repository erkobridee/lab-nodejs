describe('Calc Tests', function() {

  describe('Calc Function', function() {

    it('should be defined', function() {
      expect( Calc ).toBeDefined();
    });

  });

  describe('Calc Instance', function() {

    beforeEach(function() {
      this.calc = new Calc();
    });

    it('should be define', function() {
      expect( this.calc ).toBeDefined();
    });

    it('should add 1 + 1 = 2', function() {
      expect( this.calc.add( 1, 1 ) ).toEqual( 2 );
    });

    it('should add 212 + 121 = 333', function() {
      expect( this.calc.add( 212, 121 ) ).toEqual( 333 );
    });

  });


});
