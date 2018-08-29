'use strict'
const config = require('../../config')
const store = require('../../store')

// create game had to be moved to its own file because of a strange circular dependency

const userMoves = function (gameValues, gameOn) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': gameValues.i,
          'value': gameValues.v
        },
        'over': !gameOn
      }
    }
  })
}
const getGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games?over=true',
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  userMoves,
  getGames
}
