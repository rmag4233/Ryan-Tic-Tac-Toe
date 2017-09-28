'use strict'

const store = require('./store')
const events = require('./events')

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
  $('#messageContent').text('')
  $('#signInMessage').text('Signed in as ' + data.user.email)
  $('#logIn').text('Start a new game or select existing game.')
  $('#signOut').text('')
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
  store.games = games
  console.log('games are: ', store.games)
}

const onError = function (error) {
  console.log('there was an error. It is ', error)
}

const onAddSuccess = function (games) {
  $('#logIn').text('Good luck!')
  store.currentGame = games
  $('#contentAdd').text('Game ' + store.currentGame.game.id + ' has started. Player X starts!')
}

const onGetOneGameSuccess = function (data) {
  store.currentGame = data
  store.retrieved = true
  console.log(store.retrieved)
  for (let i = 0; i <= 8; i++) {
    events.game[i] = store.currentGame.game.cells[i]
    $('#0').text(store.currentGame.game.cells[0])
    $('#1').text(store.currentGame.game.cells[1])
    $('#2').text(store.currentGame.game.cells[2])
    $('#3').text(store.currentGame.game.cells[3])
    $('#4').text(store.currentGame.game.cells[4])
    $('#5').text(store.currentGame.game.cells[5])
    $('#6').text(store.currentGame.game.cells[6])
    $('#7').text(store.currentGame.game.cells[7])
    $('#8').text(store.currentGame.game.cells[8])
  } store.retrievedGame = events.game
  console.log(store.retrievedGame)
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
  onError,
  onAddSuccess,
  onGetOneGameSuccess
}
