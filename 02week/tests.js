let detect = require('../01week/rockPaperScissors.js')
let assert = require('assert');

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(detect.rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(detect.rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(detect.rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(detect.rockPaperScissors('rock', 'paper'), "Hand 2 Wins!");
      assert.equal(detect.rockPaperScissors('paper', 'scissors'), "Hand 2 Wins!");
      assert.equal(detect.rockPaperScissors('rock', 'scissors'), "Hand 1 Wins!");
      assert.equal(detect.rockPaperScissors('scissors', 'paper'), "Hand 1 Wins!");
      assert.equal(detect.rockPaperScissors('paper', 'rock'), "Hand 1 Wins!");
      assert.equal(detect.rockPaperScissors('scissors', 'rock'), "Hand 2 Wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(detect.rockPaperScissors('rOcK', ' paper '), "Hand 2 Wins!");
      assert.equal(detect.rockPaperScissors('Paper', 'SCISSORS'), "Hand 2 Wins!");
      assert.equal(detect.rockPaperScissors('rock ', 'sCiSsOrs'), "Hand 1 Wins!");
    });
    it('should ask for a valid move', () => {
      assert.equal(detect.rockPaperScissors('dragon', 'rock'), "Enter a valid move.");
      assert.equal(detect.rockPaperScissors('paper', 'pepper'), "Enter a valid move.");
      assert.equal(detect.rockPaperScissors('scissors', 'sciss0rs'), "Enter a valid move.");
    });
  });
} else {
  
  getPrompt();
  
}
