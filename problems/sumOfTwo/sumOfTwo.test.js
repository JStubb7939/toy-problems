var assert = require('assert');
var expect = require('chai').expect;
var sumOfTwo = require('./sumOfTwo');


describe('sumOfTwo', function() {
  it('should return true when given ([1,2,3], [10,20,30,40], 42)', function() {
    expect(sumOfTwo([1,2,3], [10,20,30,40], 42)).to.equal(true);
  });

  it('should return false when given ([1,2,3], [10,20,30], 42)', function() {
    expect(sumOfTwo([1,2,3], [10,20,30], 42)).to.equal(false);
  });

  it('should return false when one/both of the arrays is/are empty and a value is given', function() {
    expect(sumOfTwo([], [10,20,30], 42)).to.equal(false);
    expect(sumOfTwo([1,2,3], [], 42)).to.equal(false);
    expect(sumOfTwo([], [], 42)).to.equal(false);
  });

  it('should return true when both of the arrays are empty and a value is given', function() {
    expect(sumOfTwo([], [])).to.equal(true);
  });
});