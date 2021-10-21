// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  var readline = require("readline");
  var Piece = require("./piece.js");
  var Board = require("./board.js");
}
// DON'T TOUCH THIS CODE

/**
 * Sets up the game with a board and the first player to play a turn.
 */
function Game () {
  this.board = new Board();
  this.turn = "black";
}

/**
 * Flips the current turn to the opposite color.
 */
Game.prototype._flipTurn = function () {
  this.turn = (this.turn == "black") ? "white" : "black";
};

// Dreaded global state!
let rlInterface;

/**
 * Creates a readline interface and starts the run loop.
 */

Game.prototype.print = function () {
  for(let i=0; i<this.board.grid.length; i++){
    for(let j=0; j<this.board.grid[0].length; j++){
      // console.log(this.validMoves('black'));
      // console.log([i,j])
        if (this.board.validMove([i,j], this.turn)){
            process.stdout.write('[*]');
        } else if(this.board.grid[i][j] === undefined){
            process.stdout.write('[ ]');
        } else {
            process.stdout.write(`[${this.board.grid[i][j].toString()}]`);
        }
    }
    process.stdout.write("\n")
}
};


Game.prototype.play = function () {
  rlInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  this.runLoop(function () {
    rlInterface.close();
    rlInterface = null;
  });
};

/**
 * Gets the next move from the current player and
 * attempts to make the play.
 */
Game.prototype.playTurn = function (callback) {
  // this.board.print();
  this.print();
  rlInterface.question(
    `${this.turn}, where do you want to move?`,
    handleResponse.bind(this)
  );

  function handleResponse(answer) {
    const pos = JSON.parse(answer);
    if (!this.board.validMove(pos, this.turn)) {
      console.log("Invalid move!");
      this.playTurn(callback);
      return;
    }

    this.board.placePiece(pos, this.turn);
    this._flipTurn();
    callback();
  }
};

/**
 * Continues game play, switching turns, until the game is over.
 */
Game.prototype.runLoop = function (overCallback) {
  if (this.board.isOver()) {
    console.log("The game is over!");
    overCallback();
  } else if (!this.board.hasMove(this.turn)) {
    console.log(`${this.turn} has no move!`);
    this._flipTurn();
    this.runLoop();
  } else {
    this.playTurn(this.runLoop.bind(this, overCallback));
  }
};

// DON'T TOUCH THIS CODE
if (typeof window === 'undefined') {
  module.exports = Game;
}
// DON'T TOUCH THIS CODE