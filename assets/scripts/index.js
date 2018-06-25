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
  const gameBoard = []
  let isPlayerXTurn = true

  $('.gameButtons').click(function (event) {
    event.preventDefault()
    if (isPlayerXTurn) {
      gameBoard[event.target.id] = 'X'
      $(this).addClass('ximage')
    } else {
      gameBoard[event.target.id] = 'O'
      $(this).addClass('oimage')
    }
    isPlayerXTurn = !isPlayerXTurn
    console.log(gameBoard)
  })
})

checkIfWinner = function () {
  if ( (this.gameBoard[0] === this.gameBoard[1] && this.gameBoard[1] === this.gameBoard[2])
    || (this.gameBoard[3] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[5])
    || (this.gameBoard[6] === this.gameBoard[7] && this.gameBoard[7] === this.gameBoard[8])
    || (this.gameBoard[0] === this.gameBoard[3] && this.gameBoard[3] === this.gameBoard[6])
    || (this.gameBoard[1] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[7])
    || (this.gameBoard[2] === this.gameBoard[5] && this.gameBoard[5] === this.gameBoard[8])
    || (this.gameBoard[0] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[8])
    || (this.gameBoard[2] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[6])  ) {

    if (displayerXTurn) {
      alert (playerx);
    } else {
      alert (playero);
    };


// module.exports = {
//   startGame
// }

// (function() {
// 	let game = {

// startGame: function() {
//   count = 0;
//   isPlayerXTurn = true,
//   gameBoardState = [null, 0,1,2,3,4,5,6,7,8],
// })
//  endGame: function() {
// },

//  claimSpot: function(element) {
//     count++;
//     isPlayerXTurn = !isPlayerXTurn
//   },
// },

// checkIfAvailable: function() {
// checkIfWinner: function() {
// checkIfWinner: function() {

// checkIfGameInSession: function() {
// checkIfTie: function() {}
