var assert = require('assert');
var expect = require('chai').expect;
var splitEvenNumbers = require('./splitEvenNumbers');


describe('splitEvenNumbers', () => {

  describe('First Iteration: [1,10,1,3]', () => {
    let input = [1,10,1,3];

    it('should return [1,5,5,1,3] when given [1,10,1,3],0 but returned [' + splitEvenNumbers(input, 0) + '] instead', () => assert.deepEqual(splitEvenNumbers(input, 0), [1,5,5,1,3]));

    it('should return [1,1,9,1,3] when given [1,10,1,3],1 but returned [' + splitEvenNumbers(input, 1) + '] instead', () => assert.deepEqual(splitEvenNumbers(input, 1), [1,1,9,1,3]));

    it('should return [1,5,5,1,3] when given [1,10,1,3],2 but returned [' + splitEvenNumbers(input, 2) + '] instead', () => assert.deepEqual(splitEvenNumbers(input, 2), [1,5,5,1,3]));

    it('should return [1,1,1,1,1,1,1,1,1,1,1,1,3] when given [1,10,1,3],3 but returned [' + splitEvenNumbers(input, 3) + '] instead', () => assert.deepEqual(splitEvenNumbers(input, 3), [1,1,1,1,1,1,1,1,1,1,1,1,3]));
  });

  describe('Second Iteration: [1,1,3,8]', () => {
    let input = [1,1,3,8];

    it('should return [1,1,3,3,5] when given [1,1,3,8],0 but returned [' + splitEvenNumbers(input, 3) + '] instead', () => assert.deepEqual(splitEvenNumbers(input, 0), [1,1,3,3,5]));

    it('should return [1,1,3,1,7] when given [1,1,3,8],1 but returned [' + splitEvenNumbers(input, 3) + '] instead', () => assert.deepEqual(splitEvenNumbers(input, 1), [1,1,3,1,7]));

    it('should return [1,1,3,1,1,1,1,1,1,1,1] when given [1,1,3,8],2 but returned [' + splitEvenNumbers(input, 3) + '] instead', () => assert.deepEqual(splitEvenNumbers(input, 2), [1,1,3,1,1,1,1,1,1,1,1]));

    it('should return [1,1,3,1,1,1,1,1,1,1,1] when given [1,1,3,8],3 but returned [' + splitEvenNumbers(input, 3) + '] instead', () => assert.deepEqual(splitEvenNumbers(input, 3), [1,1,3,1,1,1,1,1,1,1,1]));
  });

});

