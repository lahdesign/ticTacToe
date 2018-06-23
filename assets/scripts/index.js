'use strict'
const getFormFields = require('../../lib/get-form-fields')
const api = require('./ticTacToe/api')
const ui = require('./ticTacToe/ui')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#my-form').on('submit', function (e) {
    let data = getFormFields(this)
    e.preventDefault()
    api.myRequest(data)
      .then(ui.success)
      .catch(ui.failure)
})
})
