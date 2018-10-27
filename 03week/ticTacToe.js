'use strict';
//  isValidAnswer should check that a number, 0, 1, or 2  was entered as input and that the input index position is empty
//  add an X for playerTurn X or O for playerTurn O to the row/column index position they input to game
//  checkForWin, will check for verticalWin, horizontalWin, and diagonalWin for both playerTurn X and playerTurn O
//  if checkForWin is false, then switchPlayer, playerTurn X to O or playerTurn O to X
//  if checkForWin is true, say 'Player 'playerTurnls' Won!'
//  

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

//------------------------------------------------------------------------
function updateBoard(row, column) {
  board[row][column] = playerTurn;
}

function isValidAnswer(row, column) {
  if((row == 0 || row == 1 || row  == 2) && (column == 0 || column  == 1 || column == 2)){
    return true
  } else {
    return false
  }
}


function switchPlayer() {
  if (playerTurn === 'X') {
    playerTurn = 'O';
  } else {
    playerTurn = 'X';
  }
}

function horizontalWin() {
  if (board[0][0]=== playerTurn && board[0][1]=== playerTurn && board[0][2] === playerTurn || board[1][0]=== playerTurn && board[1][1]=== playerTurn && board[1][2] === playerTurn|| board[2][0]=== playerTurn && board[2][1]=== playerTurn && board[2][2] === playerTurn) {
    return true;
  } else{
    return false;
  }
}

function verticalWin() {
  if (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn || board[0][1]=== playerTurn && board[1][1]=== playerTurn && board[2][1] === playerTurn|| board[0][2]=== playerTurn && board[1][2]=== playerTurn && board[2][2] === playerTurn){
    return true
  }else{
    return false
  }
}

function diagonalWin() {
  if (board[0][0]=== playerTurn && board[1][1]=== playerTurn && board[2][2] === playerTurn ||  board[2][0]=== playerTurn && board[1][1]=== playerTurn && board[0][0] === playerTurn){
    return true
  }else{
    return false
  }
}

function checkForWin() {
  if (verticalWin() || horizontalWin() || diagonalWin()) {
    return true
  } else {
    return false
  }
}

function ticTacToe(row, column) {
  if (isValidAnswer(row,column)) {
    updateBoard(row, column);
    if(!checkForWin(row, column)) {
      switchPlayer();
      getPrompt() 
    } else if (checkForWin()) {
      console.log( "Player " + playerTurn + " Wins!");
      printBoard;
    }
  } else {
    console.log('Enter valid answer')
    return getPrompt();
  };
  if (!checkForWin()) {
    getPrompt();
  }
}

//_____________________________________________________________________
function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
    });
  });

}

// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}