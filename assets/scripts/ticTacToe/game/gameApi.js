'use strict'
const config = require('../../config')
const store = require('../../store')

// create game has to be in another file because of a circular dependency

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
        'over': gameOn
      }
    }
  })
}
const getGames = function() {
  return $.ajax({
    url: config.apiUrl + '/games?over=true',
    method: 'GET',
    headers: {
      "Content-type": 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  userMoves,
  getGames
}

// module.exports = {
//   create,
//   index,
//   show,
//   destroy,
//   update
// }

// TODO IS this code needed?
// const ajaxDefaults = {
//   url: 'http://localhost:4741'
// }
// const myRequest = (data) => {
//   return $.ajax({
//     method: 'POST',
//     data: data,
//     url: ajaxDefaults.url
//   })
// }
module.exports = {
  userMoves
}
