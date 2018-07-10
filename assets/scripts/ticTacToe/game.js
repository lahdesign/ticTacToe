const gameApi = require('../ticTacToe/game/gameApi')

const gameValues = {
  i: 0,
  v: 0
}
class Game {
  constructor () {
    this.count = 0
    this.gameOn = true
    this.playerXTurn = true
    this.gameBoard = Array(9).fill('')
  }
  claim (event) {
    event.preventDefault()
    const available = this.checkIfAvailable(event.target.id)
    if (available === false) {
      return
    }
    if (this.playerXTurn) {
      this.gameBoard[event.target.id] = 'x'
      $(event.target).addClass('xImage')
      gameValues.i = event.target.id
      gameValues.v = this.gameBoard[event.target.id]
      gameApi.userMoves(gameValues)
    } else {
      this.gameBoard[event.target.id] = 'o'
      $(event.target).addClass('oImage')
      gameValues.i = event.target.id
      gameValues.v = this.gameBoard[event.target.id]
      gameApi.userMoves(gameValues)
    }
    this.checkTie()
    this.checkIfWinner()
    this.playerXTurn = !this.playerXTurn
    this.count++
  }
  playGame () {
    const bound = this.claim.bind(this)
    $('.gameButtons').click(bound)
  }
  checkIfWinner (playerXTurn, gameBoard) {
    const playerToken = this.playerXTurn ? 'x' : 'o'
    if ((this.gameBoard[0] === playerToken && this.gameBoard[1] === playerToken && this.gameBoard[2] === playerToken) ||
       (this.gameBoard[3] === playerToken && this.gameBoard[4] === playerToken && this.gameBoard[5] === playerToken) ||
       (this.gameBoard[6] === playerToken && this.gameBoard[7] === playerToken && this.gameBoard[8] === playerToken) ||
       (this.gameBoard[0] === playerToken && this.gameBoard[3] === playerToken && this.gameBoard[6] === playerToken) ||
       (this.gameBoard[1] === playerToken && this.gameBoard[4] === playerToken && this.gameBoard[7] === playerToken) ||
       (this.gameBoard[2] === playerToken && this.gameBoard[5] === playerToken && this.gameBoard[8] === playerToken) ||
       (this.gameBoard[0] === playerToken && this.gameBoard[4] === playerToken && this.gameBoard[8] === playerToken) ||
       (this.gameBoard[2] === playerToken && this.gameBoard[4] === playerToken && this.gameBoard[6] === playerToken)) {
      this.endGame()
    } else {
      return
    }
    if (this.playerXTurn) {
      $('#board').hide()
      console.log('made it here')
      $('.xWinsImage').css('display', 'block')
      // $(this).addClass('.xWinsImage')
    } else {
      $('#board').hide()
      $('.oWinsImage').css('display', 'inline')
      // $(this).addClass('.oWinsImage')
    }
  }
  checkTie () {
    if (this.count === 8) {
      $('.tieImage').css('display', 'inline')
      this.endGame()
      return true
    } else {
      return false
    }
  }
  endGame () {
    this.gameOn = false
    $('#board td').removeClass('oImage')
    $('#board td').removeClass('xImage')
    console.log('it is getting here')
    $('.oWinsImage').hide()
    $('.xWinsImage').hide()
    $('.tieImage').hide()
  }

  checkIfAvailable (index) {
    if (this.gameBoard[index] === '') {
      return true
    } else {
      return false
    }
  }
}

module.exports = {
  Game,
  gameValues
}
