'use strict'

const gameApi = require('./gameApi')
const gameUi = require('./gameUi')

const onGameOver = function () {
  $('#board').hide()
  $('#userInfo').hide()
}

const onGetGames = function (event) {
  console.log('got here')
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
// const onDeleteExample = function (event) {
//   event.preventDefault()
//   console.log('onDeleteExample ran!')

//   const data = getFormFields(event.target)
//   const example = data.example
// const onUpdateExample = function (event) {
//   event.preventDefault()
//   console.log('onUpdateExample ran!')

//   const data = getFormFields(event.target)
//   const example = data.example

//   if (example.text === '') {
//     $('#message').html('<p>Text is required</p>')
//     $('#message').css('background-color', 'red')
//     console.log('Text is required!')
//     return false
//   }
//   if (example.id.length !== 0) {
//     api.update(data)
//       .then(ui.onUpdateSuccess)
//       .catch(ui.onUpdateFailure)
//   } else {
//     $('#message').html('<p>Please provide an example id!</p>')
//     $('#message').css('background-color', 'red')
//     console.log('Please provide an example id!')
//   }
// }

// const addHandlers = () => {
//   $('#example-create').on('submit', onCreateExample)
//   $('#example-index').on('submit', onIndexExamples)
//   $('#example-show').on('submit', onShowExample)
//   $('#example-delete').on('submit', onDeleteExample)
//   $('#example-update').on('submit', onUpdateExample)
// }

module.exports = {
  onGetGames,
  onGameOver,
  onUserMoves

}
