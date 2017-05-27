var assert = require('assert');
var spacify = require('./spacify');

describe('Spacify', function() {
    it('should return spacified string', function() {
        assert.equal(spacify("hello"), "h e l l o");
    });

    it('should return spacified string', function() {
        assert.equal(spacify("hello world"), "h e l l o   w o r l d");
    });
});