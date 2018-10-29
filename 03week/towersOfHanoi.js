'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

//moves piece based on user input
function movePiece() {
  console.log('removedPiece')

  const removedPiece = stacks.startStack.pop();
  stacks.push(removedPiece);
}

// checks for user input of a, b or c
function isValidInput(startStack, endStack) {
  if (startStack === 'a' || startStack === 'b' || startStack === 'c') (endStack === 'a' || endStack === 'b' || endStack === 'c') 
  {
    console.log('it is valid')
    return true;
  } 
}
// checks that input follows rules of game : largest piece always on bottom of stack  
function isLegal(startStack, endStack) {

}

// checks for a game win
function checkForWin() { if (stacks === { a: [], b: [4, 3, 2, 1], c: [] } || stacks ===    { a: [], b: [], c: [4, 3, 2, 1] }) {
  console.log('checkin on that win')
  return true
}
}

// overall game function called by getPrompt
function towersOfHanoi(startStack, endStack) {
  isValidInput(startStack, endStack);
  console.log('valid')
  movePiece();

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}