'use strict'
const getFormFields = require('../../lib/get-form-fields')
const authEvents = require('./ticTacToe/auth/authEvents')
const authApi = require('./ticTacToe/auth/authApi')
const authUi = require('./ticTacToe/auth/authui')
// const gameApi = require('./ticTacToe/game/gameApi')
// const gameUi = require('./ticTacToe/game/gameUi')
const Game = require('./ticTacToe/game')
const store = require('./store')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')


$(() => {
  $('.newGame').on('click', function () {
    store.gameInstance = new Game()
  })

  $('.gameButtons').on('click', function (event) {
    store.gameInstance.claim(event)
    // $("#firstHeading").onClick("click", //GameConstructor)
  })
// submit since it is a form
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onchangePassword)
  console.log('got here')
  $('#sign-out').on('submit', authEvents.onSignOut)
  // gameInstance.playGame()
 //  $('#getGames').on('click', onGetGames)
})
