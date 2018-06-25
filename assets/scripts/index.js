'use strict'
const getFormFields = require('../../lib/get-form-fields')
const api = require('./ticTacToe/api')
const ui = require('./ticTacToe/ui')
const game = require('./ticTacToe/game')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const gameBoard = []
let isPlayerXTurn = true

$(() => {
})

// // a function that draws a board
// let drawBoard = []

// module.exports = {
//   startGame
// }

// (function() {
// 	let game = {

//   startGame: function() {
//     count = 0;
//     isPlayerXTurn = true,
//     gameBoardState = [null, 1,2,3,4,5,6,7,8,9],

// },

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
// winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
// checkIfGameInSession: function() {
// checkIfTie: function() {

$('.gameButtons').click((event) => {
  event.preventDefault()
  if (isPlayerXTurn) {
    gameBoard[event.target.id] = "X"
  } else {
    gameBoard[event.target.id] = "O"
  }
  isPlayerXTurn = !isPlayerXTurn
  console.log(gameBoard)

})
