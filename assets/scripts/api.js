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

const updateGame = function (id, text, over) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.currentGame.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': id,
          'value': text
        },
        'over': over
      }
    }
  })
}

const showOneGame = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiOrigin + '/games/' + data.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  getGames,
  startGame,
  updateGame,
  showOneGame
}
