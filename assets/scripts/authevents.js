'use strict'

const getFormFields = require(`../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  if (data.credentials.password !== data.credentials.password_confirmation) {
    $('#messageContent').text('Password and password confirmation do not match.')
  } else {
    $('#signUpEmail').val('')
    $('#signUpPassword').val('')
    $('#signUpPasswordConf').val('')
    api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFailure)
  }
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  $('#passwordChange').text('')
  $('#signInEmail').val('')
  $('#signInPassword').val('')
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  $('#changeOld').val('')
  $('#changeNew').val('')
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

// const onSignOut = function (event) {
//   event.preventDefault()
//   $('#contentAdd').text('')
//   $('#logIn').text('Please sign in to play a game.')
//   api.signOut()
//     .then(ui.signOutSuccess)
//     .catch(ui.signOutFailure)
// }

const onGetGames = function (event) {
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.onError)
    .then(function (games) {
    })
}

// const onAddGame = function (event) {
//   event.preventDefault()
//   $('.square').text('')
//   events.game = ['', '', '', '', '', '', '', '', '']
//   events.winner = ''
//   events.over = false
//   events.currentPlayer = events.playerX
//   api.startGame()
//     .then(ui.onAddSuccess)
//     .catch(ui.onError)
// }

// const onGetOneGame = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   if (data.game.id.length !== 0) {
//     api.showOneGame(data)
//       .then(events.onGetOneGameSuccess)
//       .catch(ui.onError)
//   } else {
//   }
// }

const authHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  // $('#sign-out').on('submit', onSignOut)
  $('#get-games').on('click', onGetGames)
  // $('#add-game').on('submit', onAddGame)
  // $('#game-search').on('submit', onGetOneGame)
}

module.exports = {
  authHandlers
}
