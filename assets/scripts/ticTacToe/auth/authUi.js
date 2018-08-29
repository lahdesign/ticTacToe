
const store = require('../../store.js')
// const authEvents = require('./authEvents.js')

const onSignUpSuccess = function () {
  $('#message').text('Signed up successfully')
  console.log('signed up successfully')
  $('#sign-up')[0].reset()
}

const onSignUpFailure = function (error) {
  console.error(error)
  $('#message').text('Signed up failed.')
  $('#message').css('background-color', 'red')
  // resetForms()
  setTimeout(() => $('#sign-in-message').text(''), 3000)
}

const onSignInSuccess = function (data) {
  $('#message').text('Signed in successfully.')
  $('#message').css('background-color', 'green')
  // resetForms()
  setTimeout(() => $('#message').text(''), 3000)
  store.user = data.user
  // store.gameInstance()
}

const onSignInFailure = function () {
  $('#message').text('Signed in failed.')
  $('#message').css('background-color', 'red')
  // resetForms()
  setTimeout(() => $('#sign-in-message').text(''), 3000)
}

const onChangePasswordSuccess = function () {
  $('#message').text('Changed password successfully.')
  $('#message').css('background-color', 'green')
  $('#message').delay(4000).fadeOut(400)
  // resetForms()
  // setTimeout(() => $('#change-password-message').text(''), 3000)
}

const failure = function () {
  $('#message').text('Error')
  $('#message').css('background-color', 'red')
  // console.log('Failure ran. Error is :', error)
}

const onSignOutSuccess = function () {
  $('#message').text('Signed out successfully.')
  $('#message').css('background-color', 'green')
  // resetForms()
  $('#game-board').html('')
  setTimeout(() => $('#message').text(''), 3000)
}

module.exports = {
//   onSuccess
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  failure,
  onSignOutSuccess
//   onSignOutFailure
}
