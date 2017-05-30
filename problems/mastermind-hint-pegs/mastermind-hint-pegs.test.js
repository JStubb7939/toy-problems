var assert = require('assert');
var getHints = require('./mastermind-hint-pegs');

describe('Mastermind Hint Pegs', function() {
    describe('For a code with four numbers, your function...', function() {
        let answer = [1, 2, 3, 4];
        it('should return all black for an exact match', function() {
            assert.deepEqual(getHints(answer, [1, 2, 3, 4]), { black: 4, white: 0 });
        });

        it('should return all white for correct values in incorrect positions', function() {
            assert.deepEqual(getHints(answer, [4, 3, 2, 1]), { black: 0, white: 4 });
        });

        it('should return one black when one element is in the right place, and the others are wrong elements', function() {
            assert.deepEqual(getHints(answer, [1, 1, 1, 1]), { black: 1, white: 0 });
        });

        it('should return two black and two white when two elements are in the right place, two are in the wrong place', function() {
            assert.deepEqual(getHints(answer, [1, 2, 4, 3]), { black: 2, white: 2 });
        });

        it('should return no black/white when there are no matches', function() {
            assert.deepEqual(getHints(answer, [0, 0, 0, 0]), { black: 0, white: 0 });
        });
    });

    describe('For a code with fifteen numbers, your function...', function() {
        let answer = [1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 3, 3, 3];

        it('should return the correct number of pegs for a guess where there is a mix of results (answer [1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 3, 3, 3] vs. guess [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])', function() {
            assert.deepEqual(getHints(answer, [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), { black: 5, white: 2 });
        });

        it('should return the correct number of pegs for a guess where there is a mix of results (answer [1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 3, 3, 3] vs. guess [1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 1, 2, 1, 2, 1])', function() {
            assert.deepEqual(getHints(answer, [1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 1, 2, 1, 2, 1]), { black: 7, white: 6 });
        });

        it('should return the correct number of pegs for a guess where there is a mix of results (answer [1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 3, 3, 3] vs. guess [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 3, 1, 1])', function() {
            assert.deepEqual(getHints(answer, [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 3, 1, 1]), { black: 7, white: 2 });
        });
    });
});