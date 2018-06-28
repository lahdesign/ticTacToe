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
      this.gameBoard[event.target.id] = 'X'
      console.log(this.gameBoard)
      $(event.target).addClass('xImage')
      // this.gameBoard.push(event)
    } else {
      this.gameBoard[event.target.id] = 'O'
      $(event.target).addClass('oImage')
      // this.gameBoard.push(event)
    }
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
    // trying to build gameBoard into an array that can
    //    - check for winners
    //    - check if spot is available
    //    - check if tie
    // function setMessage(msg) {
    //   document.getElementById("text").innerText = msg;
    //  }
    const token = this.playerXTurn ? 'X' : 'O'
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
    console.log(this.playerXTurn)
    if (this.playerXTurn) {
      console.log('player_x wins')
      $(this).addClass('xWinsImage')
    } else {
      console.log('player_o wins')
      console.log(this.gameBoard)
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
module.exports = Game

// (this.gameBoard[3] === lookUpToken && this.gameBoard[4] === lookUpToken && this.gameBoard[5] === lookUpToken)
//  const lookUpToken = this.playerXTurn ? 'X' : 'O'
//  console.log(lookUpToken)
