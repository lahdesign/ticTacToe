'use strict'

const gameApi = require('./gameApi')
const gameUi = require('./gameUi')

const onGameOver = function () {
  $('#board').hide()
  $('#userInfo').hide()
}

const onGetGames = function (event) {
  event.preventDefault()
  gameApi.getGames()
    .then(gameUi.onGetGamesSuccess)
    .catch(gameUi.onGetGamesFailure)
}

const onUserMoves = function (gameValues, data) {
  console.log('update moves ran')
  gameApi.updateMoves(gameValues, data.isOver)
    .then(gameUi.userMovesSuccess)
    .catch(gameUi.userMovesFailure)
}

module.exports = {
  onGetGames,
  onGameOver,
  onUserMoves

}
