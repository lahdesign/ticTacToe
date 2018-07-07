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
    } else {
      this.gameBoard[event.target.id] = 'o'
      $(event.target).addClass('oImage')
    }
    this.checkTie()
    this.checkIfWinner()
    console.log('this is the div id ' + event.target.id)
    console.log('this is value ' + this.gameBoard[event.target.id])
    // patch function requires 3 args: index, value, gameOn
    // gameAPI.userMoves(index, value, gameOn)

    // const userMoves = {
    //   game: {
    //     cell: {
    //       index: this.event.target.id,
    //       value: this.gameBoard[event.target.id]
    //     },
    //     over: this.gameOn
    //   }
    // }
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
    //     .catch(gameApi.onFailure)
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
    const token = this.playerXTurn ? 'x' : 'o'
    if ((this.gameBoard[0] === token && this.gameBoard[1] === token && this.gameBoard[2] === token) ||
       (this.gameBoard[3] === token && this.gameBoard[4] === token && this.gameBoard[5] === token) ||
       (this.gameBoard[6] === token && this.gameBoard[7] === token && this.gameBoard[8] === token) ||
       (this.gameBoard[0] === token && this.gameBoard[3] === token && this.gameBoard[6] === token) ||
       (this.gameBoard[1] === token && this.gameBoard[4] === token && this.gameBoard[7] === token) ||
       (this.gameBoard[2] === token && this.gameBoard[5] === token && this.gameBoard[8] === token) ||
       (this.gameBoard[0] === token && this.gameBoard[4] === token && this.gameBoard[8] === token) ||
       (this.gameBoard[2] === token && this.gameBoard[4] === token && this.gameBoard[6] === token)) {
      console.log(token + 'wins!')
      this.endGame()
      console.log('Game is over' + this.endGame)
      // setMessage(playerXTurn + 'is the winner!')
    } else {
      return
    }
    if (this.playerXTurn) {
      // display ('player_x wins')
      $(this).addClass('xWinsImage')
    } else {
      // display ('player_o wins')
      $(this).addClass('oWinsImage')
    }
  }
  checkTie () {
    if (this.count === 9) {
      $(this).addClass('tieImage')
      console.log('it is a tie')
      this.endGame()
      return true
    } else {
      return false
    }
  }
  endGame () {
    this.gameOn = false
    // display ('gameOver')
    $(this).addClass('gameOverimage')
  }

  checkIfAvailable (index) {
    if (this.gameBoard[index] === '') {
      return true
    } else {
      return false
    }
  }
}

module.exports =
Game

