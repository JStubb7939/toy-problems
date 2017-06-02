var assert = require('assert');
var expect = require('chai').expect;
var possibilities = require('./1-0-wildcards');


describe('1-0-wildcards', function() {
  it('should return ["1010", "1011"] when given "101?"', function() {
    let actual = possibilities("101?");
    let expected = ["1010", "1011"];
    expect(actual).to.have.members(expected);
  });

  it('should return ["1010", "1110", "1011", "1111"] when given "1?1?"', function() {
    let actual = possibilities("1?1?");
    let expected = ["1010", "1110", "1011", "1111"];
    expect(actual).to.have.members(expected);
  });

  it('should return ["0000", "0001", "0010", "0100", "1000", "0011", "0110", "1100", "0101", "1010", "1001", "0111", "1110", "1011", "1101", "1111"] when given "????"', function() {
    let actual = possibilities("????");
    let expected = ["0000", "0001", "0010", "0100", "1000", "0011", "0110", "1100", "0101", "1010", "1001", "0111", "1110", "1011", "1101", "1111"];
    expect(actual).to.have.members(expected);
  });
});