'use strict'
const getFormFields = require('../../lib/get-form-fields')
const authApi = require('./ticTacToe/auth/authApi')
const authUi = require('./ticTacToe/auth/authui')
const gameApi = require('./ticTacToe/game/gameApi')
const gameUi = require('./ticTacToe/game/gameUi')
const Game = require('./ticTacToe/game')
const store = require('./store')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  $('.newGame').on('click', function () {
    store.gameInstance = new Game()
    console.log(store)
  })

  $('.gameButtons').on('click', function (event) {
    store.gameInstance.claim(event)
  })
// submit since it is a form
  $('#sign-up').submit(function (event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
  })
  // gameInstance.playGame()
})

module.exports = {
  data
}
