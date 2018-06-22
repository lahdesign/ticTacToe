'use strict'

const ajaxDefaults = {
  url: 'http://localhost:4741'
}

const myRequest = (data) => {
  return $.ajax({
    method: 'POST',
    data: data,
    url: ajaxDefaults.url
  })
}

module.exports = {
  myRequest
}
