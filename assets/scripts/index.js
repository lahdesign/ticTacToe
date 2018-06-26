'use strict'
const getFormFields = require('../../lib/get-form-fields')
const api = require('./ticTacToe/api')
const ui = require('./ticTacToe/ui')
const game = require('./ticTacToe/game')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // let PlayerXTurn = true
  // const gameBoard = []

  startGame = function() {
      this.count = 0
      let PlayerXTurn = true
      const gameBoard = []
      gameOn = true

  endGame = function() {
       this.count = 9
       gameOn = false

  // claim spot function
  $('.gameButtons').click(function (event) {
    event.preventDefault()
    if (PlayerXTurn) {
      gameBoard[event.target.id] = 'X'
      $(this).addClass('ximage')
    } else {
      gameBoard[event.target.id] = 'O'
      $(this).addClass('oimage')
    }
    PlayerXTurn = !PlayerXTurn
    console.log(gameBoard)
    alert(event)

    // TODO add a game counter here. I can use a count++ here
  })
}
  // TODO - how do these things go somewhere other than the console log? Get saved in an array that can get fed to
  // the check if winner function, check if tie
  // function to check if winner
//   const checkIfWinner = function () {
//     if ((this.gameBoard[0] === this.gameBoard[1] && this.gameBoard[1] === this.gameBoard[2]) ||
//         (this.gameBoard[3] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[5]) ||
//         (this.gameBoard[6] === this.gameBoard[7] && this.gameBoard[7] === this.gameBoard[8]) ||
//         (this.gameBoard[0] === this.gameBoard[3] && this.gameBoard[3] === this.gameBoard[6]) ||
//         (this.gameBoard[1] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[7]) ||
//         (this.gameBoard[2] === this.gameBoard[5] && this.gameBoard[5] === this.gameBoard[8]) ||
//         (this.gameBoard[0] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[8]) ||
//         (this.gameBoard[2] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[6])) {

//       if (playerXTurn) {
//         alert("player_x");
//       } else {
//         alert("player_o");
//       }
//
//     }
//   }
// })
/
// }

// (function() {
// 	let game = {


//   gameBoardState = [null, 0,1,2,3,4,5,6,7,8],
// })
// })
//   },
// },

// checkIfAvailable: function() {
// checkIfWinner: function() {
// checkIfGameInSession: function() {

checkIfTie: function() {
  if (this.count === 9) {
    return true;
  } else {
    return false;
  };
}

/ module.exports = {
