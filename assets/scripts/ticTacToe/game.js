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
      $(event.target).toggleClass('xImage')
      gameValues.i = event.target.id
      gameValues.v = this.gameBoard[event.target.id]
      gameApi.userMoves(gameValues)
    } else {
      this.gameBoard[event.target.id] = 'o'
      $(event.target).toggleClass('oImage')
      gameValues.i = event.target.id
      gameValues.v = this.gameBoard[event.target.id]
      gameApi.userMoves(gameValues)
    }
    this.checkTie()
    this.checkIfWinner()
    console.log('this is the div id ' + event.target.id)
    console.log('this is value ' + this.gameBoard[event.target.id])
    // patch function requires 3 args: index, value, gameOn
    // gameAPI.userMoves(index, value, gameOn)



    //   gameApi.updateMove()
    //     .then((data) => {
    //       ui.onUpdateSuccess(data, this.event.target.id, this.gameBoard[event.target.id], this.gameOn)
    //     })
    //     .then(() => {
    //       if (this.over === false) {
    //         this.function()
    //         ui.function()
    //       }
    //     })
    //     .catch(gameApi.failure)
    // }
    this.playerXTurn = !this.playerXTurn
    this.count++
    console.log(this)
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
      console.log(playerToken + 'wins!')
      this.endGame()
      console.log('Game is over' + this.endGame)
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
