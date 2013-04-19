"use strict";

/* globals ClassA:false */

describe('Test Class A', function() {

  var obj;

  beforeEach(function() {
    obj = new ClassA();
  });

  it('should have ClassA defined', function() {
    expect( ClassA ).toBeDefined();
  });

  it('should sum 4+4 and return 8', function() {
    var result = obj.sum(4, 4);
    expect(result).toBe(8);
  });

  it('should sum with no parameter and return 0', function() {
    var result = obj.sum();
    expect(result).toBe(0);
  });

});