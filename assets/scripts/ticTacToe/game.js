class Game {
  constructor () {
    this.count = 0
    this.gameOn = true
    this.playerXTurn = true
    this.gameBoard = []
  }
  claim (event) {
    event.preventDefault()
    if (this.playerXTurn) {
      this.gameBoard[event.target.id] = 'X'
      $(event.target).addClass('xImage')
      // this.gameBoard.push(event)
    } else {
      this.gameBoard[event.target.id] = 'O'
      $(event.target).addClass('oImage')
     // this.gameBoard.push(event)
    }
    this.playerXTurn = !this.playerXTurn
    this.count++
    this.checkIfWinner()
  }
  playGame () {
    const bound = this.claim.bind(this)
    $('.gameButtons').click(bound)
  }
  checkIfWinner (playerXTurn, gameBoard) {
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
  checkTie () {
    if (this.count === 9) {
      $(this).addClass('tieImage')
      return true
    } else {
      return false
    }
  }
  endGame () {
    this.count = 9
    this.gameOn = false
  }
}
module.exports = Game
