'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Checker {
  constructor(color) {
    if (color === 'white') {
      this.symbol = String.fromCharCode(0x125CB); //U+25CB unicode
    } else {
      this.symbol = String.fromCharCode(0x125CF) //U+25CF unicode
    }
  }
}

class Board {
  constructor(name, grid) {
    this.name = 'Board';
    this.grid = [];
    this.checkers = []
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }

  populateGrid() {
    for (let row = 0; row < 8; row++) {
      if (row === 3 || row === 4) continue;
      for (let col = 0; col < 8; col++) {
        let color = (row < 3 ? 'white' : 'black');
        if (row % 2 === 0 && col % 2 === 1) {
          this.grid[row][col] = new Checker(color)
        } else if (row % 2 === 1 && col % 2 === 0) {
          this.grid[row][col] = new Checker(color)
        }
      }
    }
  }



  createCheckers() {
    const whitePosition = [
      [0, 1],
      [0, 3],
      [0, 5],
      [0, 7],
      [1, 0],
      [1, 2],
      [1, 4],
      [1, 6],
      [2, 1],
      [2, 3],
      [2, 5],
      [2, 7]
    ];

    //for (let i = 0; i < 12; i++) 
    // whitePosition.forEach(function (whitePosition) {
    //   let whiteRow = whitePosition[whitePosition][0];
    //   let whiteColumn = whitePosition[whitePosition][1];
    //   whiteChecker = new Checker('white');
    //   // console.log(whiteRow);
    //   this.checkers.push(whiteChecker);
    //   // console.log(this.grid[whiteRow][whiteColumn]);
    //   this.grid[whiteRow][whiteColumn] = whiteChecker;
    // });


    // for (let i = 0; i < 8; i++) {
    //   this.grid[row] = [];
    //   // push in 8 columns of nulls
    //   for (let column = 0; column < 8; column++) {
    //     this.grid[row].push(whiteChecker);
    //   }
    // }

    // for (let index = 0; index < whitePositions.length; index++) {
    //   this.grid[row][column].push(whiteChecker);
    //   this.checkers[row][column].push(whiteChecker);
    // };

    const blackPosition = [
      [5, 0],
      [5, 2],
      [5, 4],
      [5, 6],
      [6, 1],
      [6, 3],
      [6, 5],
      [6, 7],
      [7, 0],
      [7, 2],
      [7, 4],
      [7, 6]
    ];
    for (let i = 0; i < 12; i++) {
      let blackRow = blackPosition[i][0];
      let blackColumn = blackPosition[i][1];
      let blackChecker = new Checker('black');
      // console.log(whiteRow);
      this.checkers.push(blackChecker);
      // console.log(this.grid[whiteRow][whiteColumn]);
      this.grid[blackRow][blackColumn] = blackChecker;
    }
    // for (let index = 0; index < blackPositions.length; index++) {
    //   this.grid.push(blackChecker);
    //   this.checkers.push(blackChecker);
    // }
  }

  //this.grid[0][1] = whiteChecker;
  //this.grid[5][0] = blackChecker;

  selectChecker(start) {
    return this.grid[start][0][start][1];
  }

  killChecker(start) {
    return this.grid[start][0][start][1] = null;
  }
}

class Game {
  constructor() {
    this.board = new Board;
    this.player = 'black'
  }

  isLegalMove(startString, endString, toRow, fromRow, toCol, fromCol) {
    if (startString.length === 2 && endString.length === 2) {
      const to = this.board.grid[toRow][toCol];
      const from = this.board.grid[fromRow][fromCol];
      if (from && from.color === this.player) {} else {
        return 'Please enter valid move'
      }
      // make sure there is a checker to move in the start space
      // make sure its the right color
      // make sure move is forward and into an empty space
    }
  }

  start() {
    this.board.createGrid();
    this.board.createCheckers();
    this.board.populateGrid()
  }

  moveChecker(start, end) {
    const startString = start.toString;
    const endString = end.toString;
    const toRow = endString[0];
    const fromRow = startString[0];
    const toCol = endString[1];
    const fromCol = startString[1];
    this.isLegalMove(startString, endString, toRow, fromRow, toCol, fromCol);
    const checker = this.board.selectChecker([start][0], [start][1]);
    this.board.grid[end][0][end][1] = checker;
    killChecker();
    console.log(this.board.checker.indexOf(checker)); //splice
  }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (start) => {
    rl.question('to where?: ', (end) => {
      game.moveChecker(start, end);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}