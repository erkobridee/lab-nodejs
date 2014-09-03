define(['src/app/utils/Sum'], function( Sum ) {

  describe("Sum Tests", function() {

    describe("Sum Function", function() {

      it("should be defined", function() {
        expect( Sum ).toBeDefined();
      });

    });


    describe("Sum Instance", function() {

      beforeEach(function() {
        this.sum = new Sum();
      });

      it("should be defined", function() {
        expect( this.sum ).toBeDefined();
      });

      it("should add 1 + 1 equals to 2", function() {
        expect( this.sum.add( 1, 1 ) ).toEqual( 2 );
      });

      it("should add 101 + 212 equals to 313", function() {
        expect( this.sum.add( 101, 212 ) ).toEqual( 313 );
      });

    });

  });

});
