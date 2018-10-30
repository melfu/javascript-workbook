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

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
};
//------------------------------------------------------
// const towerOne = Object.values(stacks['a']);
// const towerTwo = Object.values(stacks['b']);
// const towerThree = Object.values(stacks['c']);
// const towerOneIndex = Object.keys(stacks['a']);
// const towerTwoIndex = Object.keys(stacks['b']);
// const towerThreeIndex = Object.keys(stacks['c']);

  // moves piece based on user input  
const movePiece = (startStack, endStack) => {
  // holds the object key for the array to remove disc from
  const removePieceHere = stacks[startStack];
  // holds the object key for the array to add disc to
  const addPieceHere = stacks[endStack];
  // should remove last array value from array user entered at start stack prompt
  const poppedPiece = removePieceHere.pop();
  // should add last array value that was removed from start stack onto the end stack
  addPieceHere.push(poppedPiece);
  console.log(removePieceHere);
  console.log(addPieceHere);
}

// const addedPiece = stacks[endStack].push(startStackResult);
// const removedPiece = towerOne.pop(removedPiece)
// console.log(removedPiece)
// console.log(towerOne)
// towerOne.pop()
// console.log(towerOne)
// towerThree.push(removedPiece)
// console.log(towerThree)
// towerOne.pop()
// towerThree.push(removedPiece)
// console.log(towerThree)

//   const startStackPick = stacks['startStack'];
//   const startStackResult = startStackPick.pop;
//   const newStack = [];
//   stacks.forEach=(item, index) => {
//     newStack.push(startStackResult)
//   };
// }

// checks for user input of a, b or c
const isValidInput = (startStack, endStack) => {
  if (startStack === 'a' || startStack === 'b' || startStack === 'c') (endStack === 'a' || endStack === 'b' || endStack === 'c') 
  {
    return true
  } 
}
// checks that input follows rules of game : largest piece always on bottom of stack  
const isLegal = (startStack, endStack) => {

}

// checks for a game win
const checkForWin = () => { if (stacks === { a: [], b: [4, 3, 2, 1], c: [] } || stacks ===    { a: [], b: [], c: [4, 3, 2, 1] }) {
  console.log('checkin on that win')
  return true
}
}

// overall game function called by getPrompt
const towersOfHanoi = (startStack, endStack) => { if (
  isValidInput(startStack, endStack)) {
  movePiece(startStack, endStack);
}
}
//-------------------------------------------------------------------------
const getPrompt = () => {
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