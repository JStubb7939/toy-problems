/*
Mastermind is a two-player game where one player creates a four-color code from a possible six colors. The other player has ten turns to guess this code. After each guess, the "codemaker" places pegs corresponding to correct guesses and the "codebreaker" then guesses again, based on these pegs. Black pegs are given for every color in the guess that is correctly placed, and white pegs are given for other colors in the guess that are in the code, but were not guessed in the correct position.

More info: Mastermind.

Your task is to implement a function that will compare the player's guess to the secret code and return an appropriate number of colored hints - one black peg for each correctly guessed color in a correct position, one white peg for each correct color in an incorrect position.

####Specifics for this kata:

We're going to generalize a little bit beyond the game itself. Your function will take two one-dimensional arrays. The first is the secret code (called answer), the second is the guess. The two will always be of equal length but they will never be empty. Each may contain any combination (in a non-mathematical sense of the word) of numbers and strings - note that repetitions of elements are allowed. In the function, you are given a starting object hints. You must return this object, with its black value showing the number of right element/right position guesses, and its white value showing the number of right element/wrong position guesses. In case it isn't clear, any single element in either the answer or the guess can only be used in a match once, no matter how many other elements it might have matched against (see the last couple of examples below).

##Examples:

###-basic-

No elements match: 
getHints([1,2,3], [9,8,7]) returns {black: 0, white: 0}

The 1 element matches, but is in the wrong position: 
getHints([1,2,3], [9,8,1]) returns {black: 0, white: 1}

All elements match, but all are in the wrong position: 
getHints([1,2,3], [3,1,2]) returns {black: 0, white: 3}

The 2 is in the correct position, and the other elements match, but are in the wrong position: 
getHints([1,2,3], [3,2,1]) returns {black: 1, white: 2}

All three elements are in the right position: 
getHints([1,2,3], [1,2,3]) returns {black: 3, white: 0}

###-dealing with repeated elements-

The 1 in the guess matches the first 1 in the answer, and therefore cannot be matched against the subsequent 1s in the answer: 
getHints([1,1,1,1,1], [1,0,0,0,0]) returns {black: 1, white: 0}

There is no "correct placement" match in the guess for the 0 in the answer, so the first 0 in the guess matches against the 0 in the answer (as right element/wrong position), and any subsequent 0s in the guess can no longer be matched against that 0: 
getHints([0,1,1,1,1], [2,0,0,0,0]) returns {black: 0, white: 1}

#####One final note:

Many guess arrays may be tested against the same answer array over many calls to the function, so beware any code that changes the given answer array itself if your solution depends on that!

Good luck!
*/

function getHints(answer, guess) {

  if (typeof guess !== 'object' || !Array.isArray(guess) || answer.length !== guess.length) return 'invalid input';

  // set hints black and white to the length; this is the max possible for each
  let length = answer.length;
  let hints = {black: length, white: length};
  let answerDirectory = {};
  let index = [];

  // this iteration will find the number of blacks and indeces where we have a possible white
  // iterate the answer and if correct guess, decrement white
  // if incorrect guess, decrement black and add the answer at that index to the directory
  // the answers in the directory are possible white matches
  // also push i to the index so that we only check invalid guesses in our next iteration
  for (let i = 0; i < length; i++) {
    if (answer[i] === guess[i]) {
      hints.white--;
    } else {
      hints.black--
      answerDirectory[answer[i]] ? answerDirectory[answer[i]]++ : answerDirectory[answer[i]] = 1;
      index.push(i);
    };
  }

  // this iteration will find the number of whites
  // we will iterate the index array so we don't reiterate over correct guesses
  // if the guess at our indeces in the index array is in the answer directory, then we have a white match and can move on but we need to decrement it in the answer directory because we can't use it twice
  // if the guess at our indeces in the index array is not in the answer directory, it is an incorrect guess and we need to decrement the white. Also, if we decrement the answerDirectory possibilities to zero, we will delete them and decrement white if they guess it again
  for (let i = 0; i < index.length; i++) {
    if (answerDirectory[guess[index[i]]]) {
      answerDirectory[guess[index[i]]] > 1 ? answerDirectory[guess[index[i]]]-- : delete answerDirectory[guess[index[i]]];
    } else {
      hints.white--;
    }
  }
  
  return hints;
}

module.exports = getHints;