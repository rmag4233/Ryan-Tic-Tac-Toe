'use strict'

const store = require('./store')
// const events = require('./events')

const signUpSuccess = function (data) {
  $('#messageContent').text('You have signed up as ' + data.user.email + '. Sign in to start playing!')
}

const signUpFailure = function () {
  $('#messageContent').text('This user may already exist. Please try again.')
}

const signInSuccess = function (data) {
  $('#messageContent').text('')
  $('#signInMessage').text('Signed in as ' + data.user.email)
  $('#logIn').text('Start a new game or select existing game.')
  $('#signOut').text('')
  $('#change-password').show()
  $('#sign-out').show()
  $('#get-games').show()
  $('#add-game').show()
  $('#game-search').show()
  store.user = data.user
}

const signInFailure = function () {
  $('#signInMessage').text('Please try signing in with a registered email and password.')
}

const changePasswordSuccess = function () {
  $('#passwordChange').text('Password has been successfully updated.')
}

const changePasswordFailure = function () {
  $('#passwordChange').text('Please try again.')
}

const signOutSuccess = function () {
  store.user = null
  store.currentGame = null
  store.retrieved = null
  $('#signOut').text('You have been logged out.')
  $('#signInMessage').text('')
  $('#change-password').hide()
  $('#get-games').hide()
  $('#add-game').hide()
  $('#game-search').hide()
  $('#sign-out').hide()
  $('#getStats').hide()
  $('#getStatsOver').hide()
  $('#getStatsNotOver').hide()
  $('#whoseTurn').hide()
}

const signOutFailure = function () {
  $('#signOut').text('Please try again.')
}

const getGamesSuccess = function (games) {
  store.games = games
  let gamesOver = 0
  let gamesNotOver = 0
  $('#getStats').text('You have played ' + store.games.games.length + ' games.')
  for (let i = 0; i < store.games.games.length; i++) {
    if (store.games.games[i].over === true) {
      gamesOver++
    } else if (store.games.games[i].over === false) {
      gamesNotOver++
    }
  }
  $('#getStats').show()
  $('#getStatsOver').show()
  $('#getStatsNotOver').show()
  $('#getStatsOver').text(gamesOver + ' completed games.')
  $('#getStatsNotOver').text(gamesNotOver + ' incomplete games.')
}

const onError = function () {
  $('#getGame').text('There was an error - please try again.')
}

const onAddSuccess = function (games) {
  $('#logIn').text('Good luck!')
  store.currentGame = games
  $('#contentAdd').text('Game ' + store.currentGame.game.id + ' has started. Player X starts!')
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
  onAddSuccess
}
