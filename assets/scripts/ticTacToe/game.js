class Game {
  constructor () {
    this.count = 0
    this.gameOn = true
    this.playerXTurn = true
    this.gameBoard = []
  }
  claim (event, gameBoard) {
    event.preventDefault()
    if (this.playerXTurn) {
      this.gameBoard[event.target.id] = 'x'
      console.log(this.gameBoard)
      $(event.target).addClass('xImage')
      // this.gameBoard.push(event)
    } else {
      this.gameBoard[event.target.id] = 'o'
      $(event.target).addClass('oImage')
      // this.gameBoard.push(event)
    }
    this.checkIfAvailable()
    this.checkTie()
    this.checkIfWinner()
    this.endGame()
    this.playerXTurn = !this.playerXTurn
    this.count++
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
    if (this.count === 8) {
      $(this).addClass('tieImage')
      console.log('it is a tie')
      return true
    } else {
      return false
    }
  }
  endGame () {
    this.count = 8
    this.gameOn = false
  }
}
  checkIfAvailable (gameBoard) {
			if (this.gameBoard === ;
		//do this
				 if false;
		// do this
				};
			};
  }
module.exports = Game
