'use strict'

const getFormFields = require(`../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  $('#passwordChange').text('')
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  if (store.user === undefined || null) {
    $('#passwordChange').text('You must sign in before you can change your password.')
  } else if (data.passwords.old.length === 0) {
    $('#passwordChange').text('Please enter your current password.')
  } else if (data.passwords.new.length === 0) {
    $('#passwordChange').text('Please enter a new password.')
  } else if (data.passwords.new === data.passwords.old) {
    $('#passwordChange').text('New and old passwords are the same.')
  } else {
    api.changePassword(data)
      .then(ui.changePasswordSuccess)
      .catch(ui.changePasswordFailure)
  }
}

const onSignOut = function (event) {
  event.preventDefault()
  $('#contentAdd').text('')
  $('#logIn').text('Please sign in to play a game.')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onGetGames = function (event) {
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.onError)
    .then(function (games) {
      console.log('Are there games ', games)
    })
}

const onAddGame = function (event) {
  event.preventDefault()
  // if (store.user === undefined || null) {
  //   $('#logIn').text('Please sign in to start a game.')
  // } else {
  api.startGame()
    .then(ui.onAddSuccess)
    .catch(ui.onError)
    .then(function (games) {
      console.log(games)
      store.games = games
      $('#contentAdd').text('Game ' + store.games.game.id + ' has started. Player X starts!')
    })
}

const authHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#get-games').on('click', onGetGames)
  $('#add-game').on('submit', onAddGame)
}

module.exports = {
  authHandlers
}
