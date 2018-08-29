'use strict'
// const config = require('../../config.js')
const store = require('../../store')

const onGetGamesSuccess = function (data) {
  console.log(data)
}

const onGetGamesFailure = function () {
  console.log('didnt work')
}

const onUserMovesSuccess = function (data) {}

const onCreateSuccess = function (data) {
  $('#message').text('Example successfully created')
  $('#message').css('background-color', 'green')
  store.game = data.game
  $('#board').show()
}

const onCreateFailure = function (error) {
  $('#message').text('Error on creating example')
  $('#message').css('background-color', 'red')
  console.error('onCreateFailure ran. Error is :', error)
}

const onIndexSuccess = function (data) {
  $('#message').text('All Examples successfully received')
  $('#message').css('background-color', 'green')
}

const onIndexFailure = function (error) {
  $('#message').text('Error on getting examples')
  $('#message').css('background-color', 'red')
  console.error('onIndexFailure ran. Error is :', error)
}

const onShowSuccess = function (data) {
  $('#message').text('One Example successfully received')
  $('#message').css('background-color', 'green')
}

const onShowFailure = function (error) {
  $('#message').text('Error on getting example')
  $('#message').css('background-color', 'red')
  console.error('onShowFailure ran. Error is :', error)
}

const onDestroySuccess = function () {
  $('#message').text('Example successfully deleted')
  $('#message').css('background-color', 'green')
}

const onDestroyFailure = function (error) {
  $('#message').text('Error on deleting example')
  $('#message').css('background-color', 'red')
  console.error('onDestroyFailure ran. Error is :', error)
}

const onUpdateSuccess = function () {
  $('#message').text('Example successfully updated')
  $('#message').css('background-color', 'green')
}

const onUpdateFailure = function (error) {
  $('#message').text('Error on updating example')
  $('#message').css('background-color', 'red')
  console.error('onUpdateFailure ran. Error is :', error)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onShowSuccess,
  onShowFailure,
  onDestroySuccess,
  onDestroyFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onUserMovesSuccess,
  onGetGamesSuccess,
  onGetGamesFailure
}
