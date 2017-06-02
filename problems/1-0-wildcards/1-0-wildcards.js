/*You are given a string containing 0's, 1's and one or more '?', where ? is a wildcard that can be 0 or 1.

Return an array containing all the possibilities you can reach substituing the ? for a value.

Examples: 

'101?' -> ['1010', '1011']
'1?1?' -> ['1010', '1110', '1011', '1111']

1 - Don't worry about sorting the output.
2 - Your string will never be empty.
3 - Have fun!
*/

function possibilities(str) {
  let result = [];

  (function poss(str) {
    if (str.indexOf("?") === -1) result.push(str);
    else {
      poss(str.replace("?", "1"));
      poss(str.replace("?", "0"));
    }
  }(str));

  return result;
};

module.exports = possibilities;