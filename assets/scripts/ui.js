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
  $('#logIn').text('Good luck!')
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  $('#signInMessage').text('Please try signing in with a registered email and password.')
}

const changePasswordSuccess = function () {
  console.log('Success!')
  $('#passwordChange').text('Password has been successfully updated.')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#passwordChange').text('Please try again.')
}

const signOutSuccess = function () {
  console.log('Signed out successfully!')
  $('#signOut').text('You have been logged out')
  $('#signInMessage').text('')
  store.user = null
  console.log(store.user)
}

const signOutFailure = function (error) {
  console.error(error)
  $('#signOut').text('Please try again.')
}

const getGamesSuccess = function (games) {
  console.log('games success')
  console.log('games are: ', store.games)
  console.log(store.games)
}

const onError = function (error) {
  console.log('there was an error. It is ', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  getGamesSuccess,
  onError
}
