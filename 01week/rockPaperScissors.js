'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let isValidAnswer1 = (answer1) => {
  if (answer1 !== 'rock' || answer1 !== 'paper' || answer1 !== 'scissors') {
    return false;
  }
}

let isValidAnswer2 = (answer2) => {
  if (answer2 === 'rock' || answer1 === 'paper' || answer1 === 'scissors') {
    return true;
  }
}

const rockPaperScissors = (answer1, answer2) => {
  if (isValidAnswer1(answer1) === false) {
    return 'Player 1, enter valid move.';
  } else {
    if (isValidAnswer2(answer2) === false) {
      return 'Player 2, enter valid move.';
    } else {
      if (answer1 === answer2) {
        return "It's a tie!";
      } else {
        if (answer1 === 'rock' && answer2 === 'paper') {
          return 'Hand 2 Wins!';
        } else {
          if (answer1 === 'paper' && answer2 === 'rock') {
            return 'Hand 1 Wins!';
          } else {
            if (answer1 === 'paper' && answer2 === 'scissors') {
              return 'Hand 2 Wins!';
            } else {
              if (answer2 === 'paper' && answer1 === 'scissors') {
                return 'Hand 1 Wins!';
              } else {
                if (answer2 === 'rock' && answer1 === 'scissors') {
                  return 'Hand 2 Wins!';
                } else {
                  if (answer2 === 'scissors' && answer1 === 'rock') {
                    return 'Hand 1 Wins!';
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

//user enters move as hand1
//user enters move as hand2
//if move = rock, paper, or scissros then move is valid otherwise say enter valid move
//if hand1 = hand2, it is a tie
//if hand1 = rock & hand2 = paper, hand2 wins
//if hand1 = paper & hand2 = rock, hand1 wins
//if hand1 = paper and hand2 = scissors, hand2 wins
//if hand2 = paper and hand1 = scissors, hand1 wins
//if hand2 = rock and hand1 = scissors, hand2 wins
//if hand2 = scissors and hand1 = rock, hand1 wins

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log(rockPaperScissors(answer1, answer2));
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}