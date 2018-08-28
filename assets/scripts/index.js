'use strict'
// const getFormFields = require('../../lib/get-form-fields')
const authEvents = require('./ticTacToe/auth/authEvents')
// const authApi = require('./ticTacToe/auth/authApi')
// const authUi = require('./ticTacToe/auth/authui')
const gameEvents = require('../scripts/ticTacToe/game/gameEvents')
// const gameApi = require('../scripts/ticTacToe/game/gameApi')
// const gameUi = require('./ticTacToe/game/gameUi')
const Game = require('./ticTacToe/game')
const store = require('./store')
const create = require('../scripts/ticTacToe/game/create')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')


$(() => {
  $('.newGame').on('click', function () {
    store.gameInstance = new Game.Game()
    create.createGame()
      .then(function (data) {
        store.game = data.game
      })
      .catch()
    $('#board').show()
  })

  $('.gameButtons').on('click', function (event) {
    store.gameInstance.claim(event)
    // $("#firstHeading").onClick("click", //GameConstructor)
  })
  // submit since it is a form

  $('#board').hide()
  $('.xWinsImage').hide()
  $('.tieImage').hide()
  $('.oWinsImage').hide()
  $('#userInfo').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#getGames').on('submit', gameEvents.onGetGames)
  $('#change-password').on('submit', authEvents.onchangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#getGames').on('click', gameEvents.onGetGames)
})
