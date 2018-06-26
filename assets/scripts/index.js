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
  const Game = function () {
    this.count = 0
    this.gameOn = true
    this.playerXTurn = true
    this.gameBoard = []
  }
  Game.prototype.playGame = function () {
    $('.gameButtons').click(function (event, playerXTurn, gameBoard, count) {
      event.preventDefault()
      if (playerXTurn) {
        gameBoard[event.target.id] = 'X'
        $(this).addClass('xImage')
        this.game.count++
      } else {
        gameBoard[event.target.id] = 'O'
        $(this).addClass('oImage')
        this.game.count++
      }
      playerXTurn = !playerXTurn
      count++
      console.log(gameBoard)
      alert(event)
    })
  }
  Game.prototype.checkIfWinner = function (gameBoard, playerXTurn) {
    if ((this.gameBoard[0] === this.gameBoard[1] && this.gameBoard[1] === this.gameBoard[2]) ||
        (this.gameBoard[3] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[5]) ||
        (this.gameBoard[6] === this.gameBoard[7] && this.gameBoard[7] === this.gameBoard[8]) ||
        (this.gameBoard[0] === this.gameBoard[3] && this.gameBoard[3] === this.gameBoard[6]) ||
        (this.gameBoard[1] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[7]) ||
        (this.gameBoard[2] === this.gameBoard[5] && this.gameBoard[5] === this.gameBoard[8]) ||
        (this.gameBoard[0] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[8]) ||
        (this.gameBoard[2] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[6])) {
      if (playerXTurn) {
        console.log('player_x wins')
        $(this).addClass('xWinsImage')
      } else {
        console.log('player_o wins')
        $(this).addClass('oWinsImage')
      }
    }
  }
  Game.prototype.checkTie = function () {
    if (this.count === 9) {
      $(this).addClass('tieImage')
      return true
    } else {
      return false
    }
  }
  Game.prototype.endGame = function () {
    this.count = 9
    this.gameOn = false
  }
})

Game()

 // Game.prototype.checkIfAvailable = function () {
  // }

  // Game.prototype.checkIfGameInSession = function () {
  // }
