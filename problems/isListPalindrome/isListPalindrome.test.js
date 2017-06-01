var assert = require('assert');
var expect = require('chai').expect;
var isListPalindrome = require('./isListPalindrome');

function ListNode(x) {
  this.value = x;
  this.next = null;
}

function addNode(node, x) {
  if (node.next !== null) addNode(node.next, x);
  else node.next = new ListNode(x);
}

function addNodes(node, x) {
  x.forEach(newNode => addNode(node, newNode));
}

let palindrome = new ListNode(1);
addNodes(palindrome, [2, 1]);

let notPalindrome = new ListNode(1);
addNodes(notPalindrome, [2, 2, 3]);

describe('isListPalindrome', function() {
  it('should return true when list is a palindrome', function() {
    expect(isListPalindrome(palindrome)).to.equal(true);
  });

  it('should return false when list is not a palindrome', function() {
    expect(isListPalindrome(notPalindrome)).to.equal(false);
  });
  
  it('should return true when list is empty', function() {
    expect(isListPalindrome([])).to.equal(true);
  });
});