'use strict'

const store = require('./store')

const signUpSuccess = function (data) {
  $('#messageContent').text('You have signed up as ' + data.user.email + '. Sign in to start playing!')
  console.log(data)
}

const signUpFailure = function (error) {
  console.error(error)
}

const signInSuccess = function (data) {
  console.log('Success!')
  console.log(data)
  $('#signInMessage').text('Signed in as ' + data.user.email)
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  $('#signInMessage').text('Please try signing in with a registered email and password.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
