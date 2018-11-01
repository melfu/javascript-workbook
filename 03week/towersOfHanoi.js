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
}

// checks for user input of a, b or c
const isValidInput = (startStack, endStack) => {
  if (startStack === 'a' || startStack === 'b' || startStack === 'c' || endStack === 'a' || endStack === 'b' || endStack === 'c' || startStack !== endStack)
  {
    console.log('isValidInput')
    return true;
  } 
}

// checks that input follows rules of game : largest piece always on bottom of stack  
// const isLegal = (endStack) => { if(startTest < endTest)

//   stacks[endStack].forEach(function(disc) {
//     if (disc[]>disc[]) {
//       return true
//     }
//   });
// } 
//   array1.forEach(function(element) {
//   console.log(element);
// });
// for (let i=0; i<stacks[endStack].length; i++) {
//   if (i[0] > i[1])
//     {
//       return true
//     }
//   }
// }

// checks for a game win
const checkForWin = () => { 
  if (stacks === {
    a: [],
    b: [4, 3, 2, 1],
    c: []
  } || stacks === {
      a: [],
      b: [],
      c: [4, 3, 2, 1]
    })
  {
    return true;
  }
}

// resets towers to game start settings 
const resetTowers = () => {
  stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
  };
}

// overall game function called by getPrompt
const towersOfHanoi = (startStack, endStack) => {
  if (isValidInput(startStack, endStack)) { 
    movePiece(startStack, endStack);
    if (checkForWin()) {
      console.log('You WON!');
      resetTowers();
    }}}
//     if (!checkForWin()) {
//   } 
// }
// }
  
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