'use strict'

const config = require('./config.js')
// const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data: data
  })
}

module.exports = {
  signUp
}
