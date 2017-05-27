var assert = require('assert');
var spacify = require('./spacify.js');

describe('Spacify', function() {
    it('should return spacified string', function() {
        assert.equal("h e l l o", spacify("hello"));
    });
});