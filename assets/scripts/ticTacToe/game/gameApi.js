'use strict'

const config = require('../../config')
const store = require('../../store')

const create = function (data) {
  console.log('data: ', data)
  return $.ajax({
    url: config.apiUrl + '/examples',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // data: data
  })
}

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/examples',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const show = function (example) {
  return $.ajax({
    url: config.apiUrl + '/examples/' + example.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const destroy = function (id) {
  return $.ajax({
    url: config.apiUrl + '/examples/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const update = function (data) {
  return $.ajax({
    url: config.apiUrl + '/examples/' + data.example.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // data: data
  })
}

module.exports = {
  create,
  index,
  show,
  destroy,
  update
}

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
// module.exports = {
//   myRequest
