'use strict';

/* globals ClassA:false, ClassB:false */

describe('Verify project Class\'s', function() {

  it('should have ClassA available', function() {
    expect(ClassA).toBeTruthy();
  });

  it('should have ClassB available', function() {
    expect(ClassB).toBeTruthy();
  });

});