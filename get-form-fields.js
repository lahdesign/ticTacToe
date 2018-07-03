'use strict'
// getFormFields is used to retrieve data from html forms for API
// requests. `getFormFields` only retrieves data from form elements with a name attribute.
// The object returned can be used to validate the form data.
const getFormFields = require('../../lib/get-form-fields')
// filepath now working
const authApi = require('./../ticTacToe../auth/authApi')
const authUi = require('./../ticTacToe../auth/authUi')
const ui = require('./ui')

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
// const success = (data) => {
//   // handle success
// }

// const failure = (err) => {
//   // handle failure
// }

$(() => {
  $('#sign-up').on('submit', function (event) {
    let data = getFormFields(event)
    event.preventDefault()
    authApi.myRequest(data)
      .then(authUi.success)
      .catch(authUi.failure)
  })
})

module.exports = {
data,
success,
failure
}
