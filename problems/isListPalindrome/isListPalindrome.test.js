var assert = require('assert');
var expect = require('chai').expect;
var isListPalindrome = require('./isListPalindrome');

function ListNode(x) {
  this.value = x;
  this.next = null;
}

let palindrome = new ListNode(1);
palindrome.next = new ListNode(2);
palindrome.next = new ListNode(1);

let notPalindrome = new ListNode(1);
notPalindrome.next = new ListNode(2);
notPalindrome.next = new ListNode(2);
notPalindrome.next = new ListNode(3);


describe('isListPalindrome', function() {
  it('should return true when list is a palindrome', function() {
    expect(isListPalindrome(palindrome)).to.equal(true);
  });

  it('should return false when list is not a palindrome', function() {
    expect(isListPalindrome(notPalindrome)).to.equal(false);
  });
});