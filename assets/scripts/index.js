'use strict'
const getFormFields = require('../../lib/get-form-fields')
const api = require('./ticTacToe/api')
const ui = require('./ticTacToe/ui')
const game = require('./ticTacToe/game')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

//TODO make an instance of game using constructor function

$(() => {

  const Game = function() {
      this.count = 0
      let PlayerXTurn = true
      this.gameBoard = []
      this.gameOn = true
  }
  Game.prototype.startGame = function() {
    this.gameOn = true
  }
  // const game = new Game()
  // gives game all of the starter principles

  game.startGame()

  // claim spot function
  $('.gameButtons').click(function (event) {
    event.preventDefault()
    if (PlayerXTurn) {
      gameBoard[event.target.id] = 'X'
      $(this).addClass('ximage')
      game.count++
    } else {
      gameBoard[event.target.id] = 'O'
      $(this).addClass('oimage')
    }
    PlayerXTurn = !PlayerXTurn
    count++
    console.log(gameBoard)
    alert(event)

    // Is that the correct place to do count++ here
  })
}
  // TODO - how do these things go somewhere other than the console log? Get saved in an array that can get fed to
  // the check if winner function, check if tie
  // function to check if winner

  const checkIfWinner = function (gameBoard) {
    if ((this.gameBoard[0] === this.gameBoard[1] && this.gameBoard[1] === this.gameBoard[2]) ||
        (this.gameBoard[3] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[5]) ||
        (this.gameBoard[6] === this.gameBoard[7] && this.gameBoard[7] === this.gameBoard[8]) ||
        (this.gameBoard[0] === this.gameBoard[3] && this.gameBoard[3] === this.gameBoard[6]) ||
        (this.gameBoard[1] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[7]) ||
        (this.gameBoard[2] === this.gameBoard[5] && this.gameBoard[5] === this.gameBoard[8]) ||
        (this.gameBoard[0] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[8]) ||
        (this.gameBoard[2] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[6])) {

      if (playerXTurn) {
        console.log("player_x");
          $(this).addClass('tieimage')

      } else {
        console.log("player_o");
          $(this).addClass('tieimage')
//       }
//
//     }
//   }
// })
/
// }


//   gameBoardState = [null, 0,1,2,3,4,5,6,7,8],
// })
// })
//   },
// },

// checkIfAvailable: function() {

// checkIfGameInSession: function() {

checkTie = function() {
  if (this.count === 9) {
    return true;
    $(this).addClass('tieimage')
  } else {
    return false;
  };
}
//TODO rewrite to work with constructors
endGame = function() {
  this.count = 9
  gameOn = false


 module.exports = {
