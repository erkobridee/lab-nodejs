"use strict";

/* globals ClassB:false */

describe('Test Class B', function() {

  var obj;

  beforeEach(function() {
    obj = new ClassB();
  });

  it('should have ClassB defined', function() {
    expect( ClassB ).toBeDefined();
  });

  it('should grettings Erko Bridee and return Hello, Erko Bridee', function() {
    var result = obj.grettings('Erko Bridee');
    expect(result).toBe('Hello, Erko Bridee');
  });

  it('should grettings no parameter and return Hello, unknown', function() {
    var result = obj.grettings();
    expect(result).toBe('Hello, unknown');
  });

});