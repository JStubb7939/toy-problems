var assert = require('assert');
var example = require('./example');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(example([1,2,3],4), -1);
    });
  });
});