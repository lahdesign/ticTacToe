'use strict'

const config = require('../../config.js')

// const store = require('../../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}
const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}
const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
// const index = function () {
//   return $.ajax({
//     url: config.apiOrigin + '/books',
//     method: 'GET'
//   })
// }

// const show = function (id) {
//   return $.ajax({
//     url: config.apiOrigin + '/books/' + id,
//     method: 'GET'
//   })
// }

// const destroy = function (id) {
//   return $.ajax({
//     url: config.apiOrigin + '/books/' + id,
//     method: 'DELETE'
//   })
// }

// const update = function (data) {
//   return $.ajax({
//     url: config.apiOrigin + '/books/' + data.book.id,
//     method: 'PATCH',
//     data
//   })
// }

module.exports = {
  signUp,
  signIn
  // index,
  // show,
  // destroy,
  // update
}
