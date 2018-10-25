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
  const validNumber = 0 || 1 || 2 //&& board[' '] === ' ';
  return(row === validNumber && column === validNumber) 
}

function switchPlayer() {
  if (playerTurn === 'X') {
    playerTurn('O');
  } else {
    playerTurn('X');
  }
}
const checkForX=(input)=>{
  return input === 'X'
}
const checkForO = (input)=>{
  return input === 'O'
}

function horizontalWin() {
  if (board[0].every(checkForX)||board[1].every(checkForX) || board[2].every(checkForX)) {
    return checkForWin();
  } else if ((board[0].every(checkForO)||board[0].every(checkForO)) || board[0].every(checkForO)) {
    return checkForWin();
  }
}

function verticalWin() {
  if ((board[0][0]==='X'&& board[1][0]==='X'&& board[2][0]==='X' )||
  (board[0][1]==='X'&& board[1][1]==='X'&& board[2][1]==='X' ) ||
  (board[0][2]==='X'&& board[1][2]==='X'&& board[2][2]==='X' )
  ) return checkForWin();
  if ((board[0][0]==='O'&& board[1][0]==='O'&& board[2][0]==='O' )||
  (board[0][1]==='O'&& board[1][1]==='O'&& board[2][1]==='O' ) ||
  (board[0][2]==='O'&& board[1][2]==='O'&& board[2][2]==='O' )
  ) return checkForWin();
}

function diagonalWin() {
  if ((board[0][0]==='X'&& board[1][1]==='X'&& board[2][2]==='X' )||
  (board[0][2]==='X'&& board[1][1]==='X'&& board[2][0]==='X' )
  ) return checkForWin();
  if ((board[0][0]==='O'&& board[1][1]==='O'&& board[2][2]==='O' )||
  (board[0][2]==='O'&& board[1][1]==='O'&& board[2][0]==='O' )
  ) return checkForWin();
// function horizontalWin() {
//   return (
//     board === [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ] ||
//     board === [ [' ', ' ', ' '], ['X', 'X', 'X'], [' ', ' ', ' '] ] ||
//     board === [ [' ', ' ', ' '], [' ', ' ', ' '], ['X', 'X', 'X'] ] ||
//     board === [ ['O', 'O', 'O'], [' ', ' ', ' '], [' ', ' ', ' '] ] ||
//     board === [ [' ', ' ', ' '], ['O', 'O', 'O'], [' ', ' ', ' '] ] ||
//     board === [ [' ', ' ', ' '], [' ', ' ', ' '], ['O', 'O', 'O'] ] )
// }

// function verticalWin() {
//   return (
//     board === [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ] ||
//   board === [ ['X', ' ', ' '], ['X', ' ', ' '], ['X', ' ', ' '] ] ||
//   board === [ [' ', ' ', 'X'], [' ', ' ', 'X'], [' ', ' ', 'X'] ] ||
//   board === [ [' ', 'O', ' '], [' ', 'O', ' '], [' ', 'O', ' '] ] ||
//   board === [ ['O', ' ', ' '], ['O', ' ', ' '], ['O', ' ', ' '] ] ||
//   board === [ [' ', ' ', 'O'], [' ', ' ', 'O'], [' ', ' ', 'O'] ] )
// }

// function diagonalWin() {
//   return (
//     board === [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ] ||
//   board === [ [' ', ' ', 'X'], [' ', 'X', ' '], ['X', ' ', ' '] ] ||
//   board === [ ['O', ' ', ' '], [' ', 'O', ' '], [' ', ' ', 'O'] ] ||
//   board === [ [' ', ' ', 'O'], [' ', 'O', ' '], ['O', ' ', ' '] ] )
// }

function checkForWin() {
  if (verticalWin || horizontalWin || diagonalWin){
    return "Player " + playerTurn + " Wins!"
  }}

function ticTacToe(row, column) { 
  if (isValidAnswer()) do {
    updateBoard();
    checkForWin();
    switchPlayer(); 
  } while (!checkForWin())  
  else {
    return 'Enter valid answer'; 
  }}


//_____________________________________________________________________
function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
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