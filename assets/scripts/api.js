'use strict'

const config = require('./config.js')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = function (data) {
  console.log(store.user)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getGames = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiOrigin + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const startGame = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const updateGame = function (id, text) {
//   return $.ajax({
//     url: config.apiOrigin + '/games/' + store.games.game.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     // data: {
//     //   "credentials": {
//     //     "email": "'"${EMAIL}"'",
//     //     "password": "'"${PASSWORD}"'",
//     //     "password_confirmation": "'"${PASSWORD}"'"
//     //   }
//     }
//   })
// }

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  getGames,
  startGame
}
